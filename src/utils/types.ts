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
};

export type ProfileDetailsType = {
  fetchSuccess: boolean,
  profileEmail: string | null,
  profileName: string | null,
  profileRefreshToken: string | null,
  profileLogout: boolean,
  fetchRequest: boolean,
  fetchFailed: boolean,
};

export type CheckAuthType = {
    authChecked: boolean,
    authFetchRequest: boolean,
};