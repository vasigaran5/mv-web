<?php
require_once __DIR__.'/../lib/bootstrap.php';
if (PHP_SAPI!=='cli') die("CLI only\n");
$name=$argv[1]??''; $email=$argv[2]??''; $pass=$argv[3]??'';
if($name===''||!filter_var($email,FILTER_VALIDATE_EMAIL)||strlen($pass)<12) die("Usage: php create_admin.php <name> <email> <password>=12+ chars\n");
$st=db()->prepare('INSERT INTO users(name,email,password_hash,role,status) VALUES(?,?,?,?,?)'); $st->execute([$name,$email,password_hash($pass,PASSWORD_DEFAULT),'admin','active']); echo "Admin created.\n";
