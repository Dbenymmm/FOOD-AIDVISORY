import { prisma } from "../config/prisma";

export async function getShoppingList(userId: string) {
  return prisma.shoppingList.findMany({
    where: { userId },
    include: { items: true },
    orderBy: { createdAt: "desc" }
  });
}

export async function markPurchased(itemId: string, purchased: boolean) {
  return prisma.shoppingListItem.update({
    where: { id: itemId },
    data: { purchased }
  });
}
