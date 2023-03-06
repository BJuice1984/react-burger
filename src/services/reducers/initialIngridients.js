import { GET_ITEM_FAILED, GET_ITEM_SUCCESS, GET_ITEM_REQUEST, SHOW_ITEM_DETAILS } from "../actions/initialIngridients";

const initialIngridients = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
  displayedItem: null
}

export const initialIngridientsReducer = (state = initialIngridients, action) => {
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
    case SHOW_ITEM_DETAILS: {
      return {
        ...state,
        displayedItem: action.ingridient

      }
    }
    default: {
      return state;
    }
  }
}