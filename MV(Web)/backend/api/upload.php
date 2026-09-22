<?php
require_once __DIR__.'/../lib/bootstrap.php';
$u=require_role('admin'); require_csrf(); require_method('POST');
if (!isset($_FILES['file']) || $_FILES['file']['error']!==UPLOAD_ERR_OK) out(['error'=>'Upload failed'],400);
$f=$_FILES['file']; $max=(int)env('UPLOAD_MAX_BYTES','5242880'); if($f['size']>$max) out(['error'=>'File too large'],422);
$allowed=['image/jpeg'=>'jpg','image/png'=>'png','image/webp'=>'webp','application/pdf'=>'pdf']; $mime=(new finfo(FILEINFO_MIME_TYPE))->file($f['tmp_name']); if(!isset($allowed[$mime])) out(['error'=>'Unsupported file type'],422);
$name=bin2hex(random_bytes(16)).'.'.$allowed[$mime]; $dir=__DIR__.'/../storage/uploads'; if(!is_dir($dir)) mkdir($dir,0750,true); if(!move_uploaded_file($f['tmp_name'],$dir.'/'.$name)) out(['error'=>'Unable to save file'],500);
log_security('file_uploaded',['user_id'=>$u['id'],'type'=>$mime,'size'=>$f['size']]); out(['ok'=>true,'filename'=>$name]);
