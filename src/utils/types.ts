export type IngredientType = {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number
};

export type IngredientsGroupedType = {
  bun?: IngredientType[],
  main?: IngredientType[],
  sauce?: IngredientType[]
};

export type UserIngridientsType = {
  userItems: Array<IngredientType & { id: string }>,
  bun: IngredientType & { id: string } | null
}