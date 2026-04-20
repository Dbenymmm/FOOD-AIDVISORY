import { Response } from "express";
import { z } from "zod";
import { prisma } from "../config/prisma";
import { AuthRequest } from "../middleware/auth";

const profileSchema = z.object({
  age: z.number().min(14).max(120),
  sex: z.enum(["male", "female"]),
  heightCm: z.number().min(120).max(230),
  weightKg: z.number().min(30).max(300),
  goalWeightKg: z.number().min(30).max(300),
  goalType: z.enum(["lose_weight", "maintain", "gain_muscle"]),
  activityLevel: z.enum(["sedentary", "light", "moderate", "high"]),
  dietPreference: z.enum(["standard", "fitness", "low_carb", "mediterranean", "vegetarian", "vegan", "gluten_free", "budget"]),
  allergies: z.array(z.string()).default([]),
  monthlyBudget: z.number().min(0),
  cookingPreference: z.enum(["daily", "multi_day", "quick"]),
  householdSize: z.number().int().min(1).max(10)
});

export async function upsertProfile(req: AuthRequest, res: Response) {
  try {
    const userId = req.userId!;
    const input = profileSchema.parse(req.body);
    const profile = await prisma.profile.upsert({
      where: { userId },
      create: { ...input, userId },
      update: input
    });

    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : "Invalid profile" });
  }
}

export async function getProfile(req: AuthRequest, res: Response) {
  const userId = req.userId!;
  const profile = await prisma.profile.findUnique({ where: { userId } });
  res.status(200).json(profile);
}
