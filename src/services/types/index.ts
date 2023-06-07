import { Dispatch } from "redux";
import { InitialItemsActionTypes } from "../actions/initialIngredients";
import { UserItemsActionTypes } from "../actions/userIngredients";

type AppActionsAllTypes = InitialItemsActionTypes
  | UserItemsActionTypes;

export type AppDisatch = Dispatch<AppActionsAllTypes>