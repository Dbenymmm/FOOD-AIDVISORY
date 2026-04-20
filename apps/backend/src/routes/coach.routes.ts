import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import * as coachController from "../controllers/coach.controller";

export const coachRouter = Router();
coachRouter.use(authMiddleware);
coachRouter.post("/ask", coachController.askCoach);
