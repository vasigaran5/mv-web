# Backend security implemented

- Database: PDO, native prepared statements, utf8mb4.
- SQL injection: no user input concatenated into SQL in supplied backend.
- Passwords: password_hash/password_verify; rehash on login when needed.
- Authentication: secure server-side sessions; session ID regeneration after login.
- Authorization: role checks on protected endpoints; admin-only user/settings/upload actions.
- API validation: server-side type, length, email, password, upload MIME/size validation.
- HTTPS: root .htaccess redirects HTTP to HTTPS.
- CORS: only APP_URL origin is accepted; credentials enabled only for that origin.
- CSRF: CSRF token required for state-changing cookie/session requests.
- XSS: API returns JSON; frontend must escape untrusted values and must not inject user HTML.
- File uploads: MIME detection, size limit, allow-list, random filenames, PHP execution denied in upload folder.
- Secrets: .env is intended outside public web root; no production password is shipped.
- Error handling: display_errors disabled; generic JSON errors returned.
- Rate limiting: login endpoint rate limited by IP.
- Sessions: HttpOnly, SameSite=Lax, Secure when HTTPS.
- Database user: schema includes least-privilege GRANT guidance.
- Logging: security events only; passwords are never logged.
- Updates: keep PHP/MySQL/Apache and dependencies patched.
- Backups: take encrypted, tested backups outside the web root.
- Server: directory listing disabled; sensitive files denied.

## Important deployment note
Set the exact frontend origin in `APP_URL`. Do not leave `YOUR-FRONTEND-DOMAIN.example` in production. Keep `.env`, SQL dumps, logs and uploads outside the public document root whenever the host allows it.
