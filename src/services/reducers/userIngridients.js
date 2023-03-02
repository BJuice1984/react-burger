import { ADD_USER_ITEM, MOVE_USER_ITEM } from "../actions/userIngridients";

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
    case MOVE_USER_ITEM: {
      const userItems = [...state.userItems];
      userItems.splice(action.to, 0, userItems.splice(action.from, 1)[0]);
      return {
        ...state,
        userItems
      }

    }
    default: {
      return state;
    }
  }
}