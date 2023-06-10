import { ADD_USER_ITEM, MOVE_USER_ITEM, DELETE_USER_ITEM, UserItemsActionTypes } from "../actions/userIngredients";
import { UserIngredientsType } from "../../utils/types";

const userIngridients: UserIngredientsType = {
  userItems: [],
  bun: null,
}

export const userIngridientsReducer = (state = userIngridients, action: UserItemsActionTypes): UserIngredientsType => {
  switch (action.type) {
    case ADD_USER_ITEM: {
      if (action.ingredient.type === 'bun') {
        return {
          ...state,
          bun: action.ingredient
        }
      }
      return {
        ...state,
        userItems: [...state.userItems, action.ingredient]
      }
    }
    case MOVE_USER_ITEM: {
      const userItems = [...state.userItems];
      userItems.splice(action.to, 0, userItems.splice(action.from, 1)[0]);
      return {
        ...state,
        userItems
      }
    }
    case DELETE_USER_ITEM: {
      return {
        ...state,
        userItems: [...state.userItems.filter((item) => item.id !== action.ingredient.id)]
      }
    } 
    default: {
      return state;
    }
  }
}