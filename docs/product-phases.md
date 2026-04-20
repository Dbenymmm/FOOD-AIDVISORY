# Product Implementation (Phases 2–16)

## Phase 2: Core product
Digital nutrition coach delivering meal plans, targets, shopping lists, pricing optimization, tracking and coaching.

## Phase 3: User profile model
Supported fields:
- age, sex, heightCm, weightKg, goalWeightKg
- activityLevel (sedentary/light/moderate/high)
- dietPreference (standard/fitness/low_carb/mediterranean/vegetarian/vegan/gluten_free/budget)
- allergies
- monthlyBudget
- cookingPreference (daily/multi_day/quick)
- householdSize

## Phase 4: Nutrition calculations
Mifflin-St Jeor, TDEE activity factors, goal modifiers, macro split logic in backend service.

## Phase 5: AI meal generation
7–10 days, 5 meals/day, structured meal-level nutrition and recipes, ingredient re-use constraints.

## Phase 6: Shopping list
Ingredient aggregation with quantity normalization + purchased-state tracking.

## Phase 7: Store optimization
Connector architecture for Lidl/Albert/Tesco/Kaufland via APIs/scraping/price tables.

## Phase 8: Dashboard
Calendar, macro charts, logs (energy/hunger/satisfaction), weekly trend cards.

## Phase 9: AI nutrition coach
Contextual chat grounded in user profile, logs, and meal history.

## Phase 10: Monetization
Stripe tiers:
- Free: up to 3 meal plans/month
- Pro: unlimited + analytics + coach + price optimizer

## Phase 11: Stack
Implemented per requirements with Next.js/Express/Postgres/Prisma/JWT/bcrypt/n8n/Stripe.

## Phase 12: n8n automation
Webhook-based workflows defined in `infra/n8n/workflows.json`.

## Phase 13: Database schema
Prisma schema in `prisma/schema.prisma`.

## Phase 14: Frontend pages
Landing, signup, login, profile setup, dashboard, meal plan, shopping list, coach chat.

## Phase 15: Deployment
Docker Compose for frontend, backend, postgres, n8n.

## Phase 16: Deliverables
Repository includes backend/frontend code, Prisma schema, n8n JSON, Docker config, deployment guide.
