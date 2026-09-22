<?php
declare(strict_types=1);
require_once __DIR__ . '/../config/config.php';

ini_set('display_errors','0'); ini_set('log_errors','1');
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff'); header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');

$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'CLI';
$origin = $_SERVER['HTTP_ORIGIN'] ?? ''; $allowed = env('APP_URL','');
if ($origin !== '' && $origin === $allowed) { header('Access-Control-Allow-Origin: '.$origin); header('Access-Control-Allow-Credentials: true'); header('Vary: Origin'); }
header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
if (PHP_SAPI !== 'cli' && $requestMethod === 'OPTIONS') { http_response_code(204); exit; }

$secure = (PHP_SAPI !== 'cli' && !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
session_name(env('SESSION_NAME','mv_session'));
session_set_cookie_params(['lifetime'=>0,'path'=>'/','secure'=>$secure,'httponly'=>true,'samesite'=>'Lax']);
if (session_status() !== PHP_SESSION_ACTIVE) session_start();

function json_input(): array { $raw=file_get_contents('php://input'); $data=json_decode($raw ?: '{}', true); return is_array($data)?$data:[]; }
function out(array $data,int $status=200): never { http_response_code($status); echo json_encode($data,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES); exit; }
function require_method(string $method): void { $requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'CLI'; if ($requestMethod !== $method) out(['error'=>'Method not allowed'],405); }
function csrf_token(): string { if (empty($_SESSION['csrf'])) $_SESSION['csrf']=bin2hex(random_bytes(32)); return $_SESSION['csrf']; }
function require_csrf(): void { if (!hash_equals($_SESSION['csrf'] ?? '', $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) out(['error'=>'CSRF validation failed'],419); }
function require_auth(): array { if (empty($_SESSION['user'])) out(['error'=>'Authentication required'],401); return $_SESSION['user']; }
function require_role(string ...$roles): array { $u=require_auth(); if (!in_array($u['role'],$roles,true)) out(['error'=>'Forbidden'],403); return $u; }
function validate_email(mixed $v): string { $s=filter_var($v,FILTER_VALIDATE_EMAIL); if (!$s) out(['error'=>'Invalid email'],422); return $s; }
function validate_password(mixed $v): string { $s=(string)$v; if (strlen($s)<12 || strlen($s)>200) out(['error'=>'Password must be 12-200 characters'],422); return $s; }
function db(): PDO { static $pdo; if ($pdo instanceof PDO) return $pdo; $dsn='mysql:host='.env('DB_HOST').' ;port='.env('DB_PORT','3306').';dbname='.env('DB_NAME').';charset=utf8mb4'; $dsn=str_replace('host='.env('DB_HOST').' ;','host='.env('DB_HOST').';',$dsn); $pdo=new PDO($dsn,env('DB_USER'),env('DB_PASS'),[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC,PDO::ATTR_EMULATE_PREPARES=>false]); return $pdo; }
function log_security(string $event, array $meta=[]): void { $line=json_encode(['time'=>gmdate('c'),'ip'=>$_SERVER['REMOTE_ADDR']??'','event'=>$event,'meta'=>$meta],JSON_UNESCAPED_SLASHES).PHP_EOL; @file_put_contents(__DIR__.'/../storage/logs/security.log',$line,FILE_APPEND|LOCK_EX); }
function rate_limit(string $key,int $max=10,int $window=300): void { $file=sys_get_temp_dir().'/mv_rl_'.hash('sha256',$key); $now=time(); $data=is_file($file)?json_decode((string)file_get_contents($file),true):null; if (!is_array($data)||$data['reset']<=$now) $data=['count'=>0,'reset'=>$now+$window]; $data['count']++; file_put_contents($file,json_encode($data),LOCK_EX); if ($data['count']>$max) out(['error'=>'Too many requests'],429); }
