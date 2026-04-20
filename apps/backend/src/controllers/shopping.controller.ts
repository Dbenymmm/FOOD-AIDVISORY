import { Response } from "express";
import { z } from "zod";
import { AuthRequest } from "../middleware/auth";
import * as shoppingService from "../services/shopping.service";

export async function listShopping(req: AuthRequest, res: Response) {
  const data = await shoppingService.getShoppingList(req.userId!);
  res.status(200).json(data);
}

export async function markPurchased(req: AuthRequest, res: Response) {
  const schema = z.object({ purchased: z.boolean() });
  const params = z.object({ itemId: z.string().uuid() });
  const { purchased } = schema.parse(req.body);
  const { itemId } = params.parse(req.params);
  const item = await shoppingService.markPurchased(itemId, purchased);
  res.status(200).json(item);
}
