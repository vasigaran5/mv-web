<?php
require_once __DIR__.'/../lib/bootstrap.php';
$u=require_role('admin'); $method=$_SERVER['REQUEST_METHOD'];
if ($method==='GET') { $rows=db()->query('SELECT id,name,email,role,status,created_at FROM users ORDER BY id DESC')->fetchAll(); out(['users'=>$rows]); }
require_csrf();
if ($method==='POST') { $d=json_input(); $name=trim((string)($d['name']??'')); if($name===''||mb_strlen($name)>100) out(['error'=>'Invalid name'],422); $email=validate_email($d['email']??''); $pass=validate_password($d['password']??''); $role=in_array($d['role']??'',ALLOWED_ROLES,true)?$d['role']:'manager'; $h=password_hash($pass,PASSWORD_DEFAULT); try { $st=db()->prepare('INSERT INTO users(name,email,password_hash,role,status) VALUES(?,?,?,?,?)'); $st->execute([$name,$email,$h,$role,'active']); log_security('user_created',['actor_id'=>$u['id'],'new_user_id'=>db()->lastInsertId()]); out(['ok'=>true],201); } catch(PDOException $e){ if((int)$e->errorInfo[1]===1062) out(['error'=>'Email already exists'],409); out(['error'=>'Unable to create user'],500); } }
if ($method==='DELETE') { $id=filter_var($_GET['id']??null,FILTER_VALIDATE_INT); if(!$id||$id===$u['id']) out(['error'=>'Invalid user'],422); $st=db()->prepare('DELETE FROM users WHERE id=?'); $st->execute([$id]); log_security('user_deleted',['actor_id'=>$u['id'],'deleted_user_id'=>$id]); out(['ok'=>true]); }
out(['error'=>'Method not allowed'],405);
