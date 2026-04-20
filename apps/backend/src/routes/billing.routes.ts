import { Router } from "express";
import * as billingController from "../controllers/billing.controller";
import { authMiddleware } from "../middleware/auth";

export const billingRouter = Router();
billingRouter.post("/checkout", authMiddleware, billingController.createCheckoutSession);
billingRouter.post("/webhooks/stripe", billingController.stripeWebhook);
