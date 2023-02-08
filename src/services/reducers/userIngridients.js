import { ADD_USER_ITEM } from "../actions/userIngridients";

const userIngridients = {
  userItems: [],
  bun: null,
}

export const userIngridientsReducer = (state = userIngridients, action) => {
  switch (action.type) {
    case ADD_USER_ITEM: {
      if (action.ingridient.type === 'bun') {
        return {
          ...state,
          bun: action.ingridient
        }
      }
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