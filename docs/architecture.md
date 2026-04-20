# Phase 1 — System Architecture

## High-level architecture diagram

```mermaid
flowchart LR
  U[Users / Browser] --> FE[Next.js Frontend]
  FE -->|JWT auth, API calls| BE[Express API]
  FE -->|Stripe Checkout| ST[Stripe]
  ST -->|Webhook events| BE

  BE --> DB[(PostgreSQL)]
  BE --> PR[Prisma ORM]
  PR --> DB

  BE --> AI[LLM Provider\n(OpenAI/Claude)]
  BE --> N8N[n8n Automation]
  N8N --> BE
  N8N --> DB

  BE --> AN[Analytics Service\n(events + aggregates)]
  AN --> DB

  BE --> SP[Store Price Connectors\nAPIs/Scrapers/DB]
  SP --> DB
```

## Service responsibilities

- **Frontend (Next.js)**: onboarding, dashboard, shopping list, coach chat, billing UX.
- **Backend (Express)**: domain APIs, auth, calculations, orchestration, webhooks.
- **Database (PostgreSQL + Prisma)**: persistent data model and querying.
- **AI Service**: meal plan + coaching responses in strict JSON contracts.
- **Automation (n8n)**: asynchronous flows (meal generation, list aggregation, price optimization, nutrition insights).
- **Analytics**: event ingestion and weekly trend summaries.
- **Payments (Stripe)**: subscription lifecycle and entitlements.

## Communication flow

1. User signs up/login; backend issues JWT.
2. Profile setup persists health + lifestyle preferences.
3. User requests plan -> backend computes nutrition targets (Mifflin-St Jeor + TDEE + goal adjustment).
4. Backend invokes n8n meal generation webhook with profile + targets.
5. n8n invokes LLM and returns structured meal JSON.
6. Backend stores meals, recipes, ingredients; triggers shopping list aggregation + price optimization.
7. Dashboard queries meal plans, analytics, and logs.
8. Stripe webhooks update subscription entitlements.

## Scalability model

- Stateless frontend/backend containers behind load balancer.
- Connection-pooled Postgres; read replicas optional.
- Queue-compatible automation boundary (n8n webhooks can move to message queue).
- Caching layer (future Redis) for generated plans and store prices.
- Idempotent webhook handlers for Stripe and n8n.
