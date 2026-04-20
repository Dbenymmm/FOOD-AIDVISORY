import { prisma } from "../config/prisma";

export async function buildCoachContext(userId: string) {
  const [profile, latestPlans, logs] = await Promise.all([
    prisma.profile.findUnique({ where: { userId } }),
    prisma.mealPlan.findMany({ where: { userId }, orderBy: { createdAt: "desc" }, take: 3 }),
    prisma.dailyLog.findMany({ where: { userId }, orderBy: { date: "desc" }, take: 14 })
  ]);

  return {
    profile,
    latestPlans,
    logs
  };
}
