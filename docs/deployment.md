# Deployment Instructions

## Environment Variables

### Backend (`apps/backend/.env`)
- `PORT=4000`
- `DATABASE_URL=postgresql://postgres:postgres@postgres:5432/food_aidvisory?schema=public`
- `JWT_SECRET=change_me`
- `OPENAI_API_KEY=...`
- `OPENAI_MODEL=gpt-4.1-mini`
- `N8N_BASE_URL=http://n8n:5678`
- `STRIPE_SECRET_KEY=...`
- `STRIPE_WEBHOOK_SECRET=...`
- `FRONTEND_URL=http://localhost:3000`

### Frontend (`apps/frontend/.env.local`)
- `NEXT_PUBLIC_API_URL=http://localhost:4000/api`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...`

## Local deploy
```bash
docker compose up --build -d
docker compose exec backend npm run prisma:generate
docker compose exec backend npm run prisma:migrate
```

## Production notes
- Put services behind HTTPS reverse proxy.
- Rotate JWT + API secrets.
- Enable Postgres backups and monitoring.
- Configure Stripe webhook endpoint to `/api/webhooks/stripe`.
