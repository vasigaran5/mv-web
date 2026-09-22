<?php
declare(strict_types=1);

function env(string $key, ?string $default = null): ?string {
    static $vars = null;
    if ($vars === null) {
        $vars = [];
        $paths = [dirname(__DIR__, 2) . '/.env', dirname(__DIR__) . '/.env', getenv('MV_ENV_FILE') ?: ''];
        foreach ($paths as $path) {
            if (!$path || !is_readable($path)) continue;
            foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
                $line = trim($line); if ($line === '' || $line[0] === '#') continue;
                [$k,$v] = array_pad(explode('=', $line, 2), 2, '');
                $vars[trim($k)] = trim($v, " \"'");
            }
            break;
        }
    }
    $v = $vars[$key] ?? getenv($key);
    return ($v === false || $v === null || $v === '') ? $default : (string)$v;
}

const ALLOWED_ROLES = ['admin','manager'];
