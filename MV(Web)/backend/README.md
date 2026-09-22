# Secure PHP + MySQL backend

This backend uses PDO prepared statements, secure PHP sessions, CSRF protection, role checks, validation, rate limiting, upload validation, security logging, and a least-privilege MySQL account.

## Setup
1. Create a MySQL database and run `database/schema.sql`.
2. Copy `config/.env.example` to a location OUTSIDE the public web root and fill in the values.
3. Set `APP_URL` to the exact frontend origin (for example `https://your-domain.example`).
4. Point Apache/Nginx document root at the React `dist` directory, and keep `backend` outside the public web root when possible. If backend must be public, the included `.htaccess` denies direct access to config/storage/database files.
5. Run `php backend/scripts/create_admin.php` from the server CLI to create the first admin.
6. Build the React app with `npm run build`.

The default frontend login has been changed to call `/backend/api/auth.php?action=login`; it no longer contains demo passwords.
