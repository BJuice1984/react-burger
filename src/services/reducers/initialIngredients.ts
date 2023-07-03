import { GET_ITEM_FAILED, GET_ITEM_SUCCESS, GET_ITEM_REQUEST, InitialItemsActionTypes } from "../actions/initialIngredients";
import { IngredientType } from "../../utils/types";

type InitialIngridientsType = {
  items: Array<IngredientType>,
  itemsRequest: boolean,
  itemsFailed: boolean,
};

const initialIngridients: InitialIngridientsType = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
};

export const initialIngridientsReducer = (state = initialIngridients, action: InitialItemsActionTypes): InitialIngridientsType => {
  switch (action.type) {
    case GET_ITEM_REQUEST: {
      return {
        ...state,
        itemsRequest: true
      }
    }
    case GET_ITEM_SUCCESS: {
      return {
        ...state,
        items: action.items,
        itemsRequest: false,
        itemsFailed: false
      }
    }
    case GET_ITEM_FAILED: {
      return {
        ...state,
        items: [],
        itemsRequest: false,
        itemsFailed: true
      }
    }
    default: {
      return state;
    }
  }
}