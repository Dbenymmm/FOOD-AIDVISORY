export type Sex = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "high";
export type GoalType = "lose_weight" | "maintain" | "gain_muscle";

export interface NutritionTargets {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
}
