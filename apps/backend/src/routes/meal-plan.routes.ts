import { Router } from "express";
import * as mealPlanController from "../controllers/meal-plan.controller";
import { authMiddleware } from "../middleware/auth";

export const mealPlanRouter = Router();
mealPlanRouter.use(authMiddleware);
mealPlanRouter.post("/generate", mealPlanController.generatePlan);
