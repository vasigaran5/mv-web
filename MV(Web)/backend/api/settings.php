<?php
require_once __DIR__.'/../lib/bootstrap.php';
if ($_SERVER['REQUEST_METHOD']==='GET') { require_auth(); $r=db()->query('SELECT setting_key,setting_value FROM settings')->fetchAll(); $out=[]; foreach($r as $x)$out[$x['setting_key']]=$x['setting_value']; out(['settings'=>$out]); }
$u=require_role('admin'); require_csrf(); require_method('POST'); $d=json_input(); $allowed=['businessName','gstin','state','phone','email','invoicePrefix','nextInvoiceNo','address'];
$st=db()->prepare('INSERT INTO settings(setting_key,setting_value,updated_by) VALUES(?,?,?) ON DUPLICATE KEY UPDATE setting_value=VALUES(setting_value),updated_by=VALUES(updated_by)');
foreach($allowed as $k){ if(array_key_exists($k,$d)){ $v=trim((string)$d[$k]); if(mb_strlen($v)>1000) out(['error'=>'Setting too long'],422); $st->execute([$k,$v,$u['id']]); }} log_security('settings_updated',['user_id'=>$u['id']]); out(['ok'=>true]);
