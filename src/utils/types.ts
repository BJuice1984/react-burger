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

export type UserIngredientsType = {
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

export type ForgotPasswordType = {
  isUserExist: boolean,
  forgotPasswordSuccess: boolean,
  forgotPasswordRequest: boolean,
  forgotPasswordFailed: boolean,
};

export type OrderDetailsType = {
  orderName: string,
  orderNumber: number | null,
  orderSuccess: boolean,
  orderRequest: boolean,
  orderFailed: boolean,
};

export type OrderType = {
  ingredients: Array<string>,
  _id: string,
  status: string,
  name: string,
  number: number | null,
  createdAt?: string,
  updatedAt: string,
};

export type OrderHistoryType = {
    success: boolean,
    orders: Array<OrderType>,
    total: number | null,
    totalToday: number | null,
}

export type OrderHistoryDetailsType = {
  connect: boolean,
  error: boolean,
  orderDetails: OrderHistoryType,
};

export type OrdersGroupedType = {
  done?: OrderType[],
  pending?: OrderType[],
};