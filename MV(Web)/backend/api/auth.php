<?php
require_once __DIR__.'/../lib/bootstrap.php';
$action=$_GET['action']??'';
if ($action==='csrf') { out(['csrf'=>csrf_token()]); }
if ($action==='login') {
  require_method('POST'); rate_limit('login:'.($_SERVER['REMOTE_ADDR']??''),8,300); $d=json_input(); $email=validate_email($d['email']??''); $pass=(string)($d['password']??'');
  $st=db()->prepare('SELECT id,name,email,password_hash,role,status FROM users WHERE email=? LIMIT 1'); $st->execute([$email]); $u=$st->fetch();
  if (!$u || $u['status']!=='active' || !password_verify($pass,$u['password_hash'])) { log_security('login_failed',['email'=>$email]); out(['error'=>'Invalid email or password'],401); }
  if (password_needs_rehash($u['password_hash'],PASSWORD_DEFAULT)) { $h=password_hash($pass,PASSWORD_DEFAULT); db()->prepare('UPDATE users SET password_hash=? WHERE id=?')->execute([$h,$u['id']]); }
  session_regenerate_id(true); $_SESSION['user']=['id'=>(int)$u['id'],'name'=>$u['name'],'email'=>$u['email'],'role'=>$u['role']]; csrf_token(); log_security('login_success',['user_id'=>$u['id']]); out(['user'=>$_SESSION['user'],'csrf'=>$_SESSION['csrf']]);
}
if ($action==='me') { $u=require_auth(); out(['user'=>$u,'csrf'=>csrf_token()]); }
if ($action==='logout') { require_method('POST'); require_csrf(); $u=$_SESSION['user']??null; $_SESSION=[]; if (ini_get('session.use_cookies')) { $p=session_get_cookie_params(); setcookie(session_name(),'',['expires'=>time()-42000,'path'=>$p['path'],'secure'=>$p['secure'],'httponly'=>$p['httponly'],'samesite'=>$p['samesite']??'Lax']); } session_destroy(); log_security('logout',['user_id'=>$u['id']??null]); out(['ok'=>true]); }
out(['error'=>'Unknown action'],404);
