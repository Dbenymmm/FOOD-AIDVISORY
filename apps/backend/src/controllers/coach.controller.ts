import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import { buildCoachContext } from "../services/coach.service";

export async function askCoach(req: AuthRequest, res: Response) {
  const context = await buildCoachContext(req.userId!);
  const prompt = (req.body?.message as string) ?? "";

  res.status(200).json({
    answer: `Coach insight for: ${prompt}. Increase protein earlier in the day and add fiber-rich snacks.`,
    contextSummary: {
      logsConsidered: context.logs.length,
      plansConsidered: context.latestPlans.length
    }
  });
}
