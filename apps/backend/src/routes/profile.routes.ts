import { Router } from "express";
import * as profileController from "../controllers/profile.controller";
import { authMiddleware } from "../middleware/auth";

export const profileRouter = Router();
profileRouter.use(authMiddleware);
profileRouter.get("/me", profileController.getProfile);
profileRouter.put("/me", profileController.upsertProfile);
