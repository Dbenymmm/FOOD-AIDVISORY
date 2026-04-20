import { Request, Response } from "express";

export async function createCheckoutSession(req: Request, res: Response) {
  const priceId = req.body?.priceId;
  if (!priceId) return res.status(400).json({ message: "priceId is required" });

  return res.status(200).json({
    checkoutUrl: `https://checkout.stripe.com/pay/mock-session-for-${priceId}`
  });
}

export async function stripeWebhook(req: Request, res: Response) {
  return res.status(200).json({ received: true, type: req.body?.type ?? "unknown" });
}
