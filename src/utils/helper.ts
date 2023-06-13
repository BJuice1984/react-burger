import { UserIngredientsType } from "./types"

export const burgerPrice = (items: UserIngredientsType) => {
  return items.userItems.reduce(
    (acc, current) => acc + current.price, 0
  ) + (items.bun ? items.bun.price * 2 : 0)
};