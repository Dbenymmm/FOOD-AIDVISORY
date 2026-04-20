import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { authRouter } from "./routes/auth.routes";
import { profileRouter } from "./routes/profile.routes";
import { mealPlanRouter } from "./routes/meal-plan.routes";
import { shoppingRouter } from "./routes/shopping.routes";
import { coachRouter } from "./routes/coach.routes";
import { billingRouter } from "./routes/billing.routes";

const app = express();
app.use(cors({ origin: env.FRONTEND_URL }));
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/meal-plan", mealPlanRouter);
app.use("/api/shopping", shoppingRouter);
app.use("/api/coach", coachRouter);
app.use("/api/billing", billingRouter);

app.listen(env.PORT, () => {
  console.log(`Backend listening on port ${env.PORT}`);
});
