# FOOD-AIDVISORY SaaS Platform

Production-ready monorepo for an AI-powered personalized meal planning SaaS.

## Stack
- Frontend: Next.js 15, TypeScript, TailwindCSS, TanStack Query
- Backend: Node.js, Express, TypeScript
- Database: PostgreSQL + Prisma ORM
- Auth: JWT + bcrypt
- AI: OpenAI-compatible provider
- Automation: n8n webhook workflows
- Payments: Stripe subscriptions
- Deployment: Docker Compose

## Quick Start
1. Copy environment templates:
   - `cp apps/backend/.env.example apps/backend/.env`
   - `cp apps/frontend/.env.example apps/frontend/.env.local`
2. Start stack:
   - `docker compose up --build`
3. Run migrations:
   - `docker compose exec backend npm run prisma:migrate`
4. Open:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:4000/health
   - n8n: http://localhost:5678

Detailed architecture and implementation docs are in `docs/`.
