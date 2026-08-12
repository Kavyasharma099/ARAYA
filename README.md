# ARAYA — Render Ready

Single-service Node.js/Express deployment. Frontend and backend run from the same Render Web Service.

## Render
1. Put these files in the root of a GitHub repository.
2. Render → New → Web Service → connect the repository.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Deploy.

Test `https://YOUR-RENDER-DOMAIN/api/health` and expect `{"service":"ARAYA","status":"ok"}`.

Before real users: connect a database, secure password hashing, sessions, RBAC, rate limiting, audit logging, and an authorized OTP provider. Never expose real passwords or OTPs.
