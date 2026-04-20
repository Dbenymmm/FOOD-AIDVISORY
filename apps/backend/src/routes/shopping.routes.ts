import { Router } from "express";
import * as shoppingController from "../controllers/shopping.controller";
import { authMiddleware } from "../middleware/auth";

export const shoppingRouter = Router();
shoppingRouter.use(authMiddleware);
shoppingRouter.get("/", shoppingController.listShopping);
shoppingRouter.patch("/items/:itemId", shoppingController.markPurchased);
