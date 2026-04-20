import { Response } from "express";
import { z } from "zod";
import { AuthRequest } from "../middleware/auth";
import * as mealPlanService from "../services/meal-plan.service";

export async function generatePlan(req: AuthRequest, res: Response) {
  try {
    const schema = z.object({ days: z.number().min(7).max(10).default(7) });
    const { days } = schema.parse(req.body ?? {});
    const result = await mealPlanService.generateMealPlanForUser(req.userId!, days);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : "Generation failed" });
  }
}
