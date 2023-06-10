import { Action, ActionCreator, Dispatch } from "redux";
import { InitialItemsActionTypes } from "../actions/initialIngredients";
import { UserItemsActionTypes } from "../actions/userIngredients";
import { ProfileActionTypes } from "../actions/profile";
import { AuthCheckedTypes } from "../actions/checkAuth";
import { ForgotPasswordActionTypes } from "../actions/forgotPassword";
import { OrderDetailsActionTypes } from "../actions/orderDetails";
import { rootReducer } from "../reducers/rootReducer";
import { ThunkAction } from "redux-thunk";

type AppActionsAllTypes = InitialItemsActionTypes
  | UserItemsActionTypes
  | ProfileActionTypes
  | AuthCheckedTypes
  | ForgotPasswordActionTypes
  | OrderDetailsActionTypes;

export type AppDisatch = Dispatch<AppActionsAllTypes>;

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, AppActionsAllTypes>
>;
