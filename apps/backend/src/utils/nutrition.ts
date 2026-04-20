import { ActivityLevel, GoalType, NutritionTargets, Sex } from "../types/domain";

const activityFactors: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  high: 1.725
};

export function calculateNutritionTargets(input: {
  weightKg: number;
  heightCm: number;
  age: number;
  sex: Sex;
  activityLevel: ActivityLevel;
  goalType: GoalType;
}): NutritionTargets {
  const s = input.sex === "male" ? 5 : -161;
  const bmr = 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age + s;
  const tdee = bmr * activityFactors[input.activityLevel];

  const calorieMultiplier =
    input.goalType === "lose_weight" ? 0.8 : input.goalType === "gain_muscle" ? 1.15 : 1;

  const calories = Math.round(tdee * calorieMultiplier);

  const proteinCals = calories * 0.3;
  const carbsCals = calories * 0.4;
  const fatCals = calories * 0.3;

  return {
    calories,
    proteinGrams: Math.round(proteinCals / 4),
    carbsGrams: Math.round(carbsCals / 4),
    fatGrams: Math.round(fatCals / 9)
  };
}
