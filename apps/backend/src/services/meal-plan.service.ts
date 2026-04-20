import { prisma } from "../config/prisma";
import { calculateNutritionTargets } from "../utils/nutrition";

export async function generateMealPlanForUser(userId: string, days = 7) {
  const profile = await prisma.profile.findUnique({ where: { userId } });
  if (!profile) throw new Error("Profile not found");

  const targets = calculateNutritionTargets({
    weightKg: Number(profile.weightKg),
    heightCm: profile.heightCm,
    age: profile.age,
    sex: profile.sex === "male" ? "male" : "female",
    activityLevel: profile.activityLevel,
    goalType: profile.goalType
  });

  const mealPlan = await prisma.mealPlan.create({
    data: {
      userId,
      title: `${days}-day Personalized Plan`,
      days,
      status: "generated",
      targetCalories: targets.calories,
      targetProtein: targets.proteinGrams,
      targetCarbs: targets.carbsGrams,
      targetFat: targets.fatGrams,
      startDate: new Date()
    }
  });

  return { mealPlan, targets };
}
