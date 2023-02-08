import { ADD_USER_ITEM } from "../actions/userIngridients";

const userIngridients = {
  userItems: [],
}

export const userIngridientsReducer = (state = userIngridients, action) => {
  switch (action.type) {
    case ADD_USER_ITEM: {
      return {
        ...state,
        userItems: [...state.userItems, action.ingridient]
      }
    }
    default: {
      return state;
    }
  }
}