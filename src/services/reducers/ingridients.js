import { GET_ITEM_FAILED, GET_ITEM_SUCCESS, GET_ITEM_REQUEST, ADD_USER_ITEM } from "../actions/initialIngridients";

const ingridients = {
  items: [],
  userItems: [],
  itemsRequest: false,
  itemsFailed: false,
}

export const ingridientsReducer = (state = ingridients, action) => {
  console.log(action)
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
        itemsRequest: false,
        itemsFailed:true
      }
    }
    case ADD_USER_ITEM: {
      return {
        ...state,
        userItems: [...state.userItems, ...state.items.filter(ingridient => ingridient._id === action._id)]
      }
    }
    default: {
      return state;
    }
  }
}