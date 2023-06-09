import { Dispatch } from "redux";
import { InitialItemsActionTypes } from "../actions/initialIngredients";
import { UserItemsActionTypes } from "../actions/userIngredients";
import { ProfileActionTypes } from "../actions/profile";
import { AuthCheckedTypes } from "../actions/checkAuth";

type AppActionsAllTypes = InitialItemsActionTypes
  | UserItemsActionTypes
  | ProfileActionTypes
  | AuthCheckedTypes;

export type AppDisatch = Dispatch<AppActionsAllTypes>
