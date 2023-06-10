import { InitialItemsActionTypes } from "../actions/initialIngredients";
import { UserItemsActionTypes } from "../actions/userIngredients";
import { ProfileActionTypes } from "../actions/profile";
import { AuthCheckedTypes } from "../actions/checkAuth";
import { ForgotPasswordActionTypes } from "../actions/forgotPassword";
import { OrderDetailsActionTypes } from "../actions/orderDetails";
import { rootReducer } from "../reducers/rootReducer";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export type AppActionsAllTypes = InitialItemsActionTypes
  | UserItemsActionTypes
  | ProfileActionTypes
  | AuthCheckedTypes
  | ForgotPasswordActionTypes
  | OrderDetailsActionTypes;

export type AppDispatch = ThunkDispatch<RootState, never, AppActionsAllTypes>;

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  never,
  AppActionsAllTypes
>;
