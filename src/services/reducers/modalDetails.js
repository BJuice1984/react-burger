import { SHOW_ITEM_DETAILS, DELETE_ITEM_DETAILS } from "../actions/modalDetails";

const modalDetails = {
  modalOpen: false,
  displayedItem: null
}

export const modalDetailsReducer = (state = modalDetails, action) => {
  switch (action.type) {
    case SHOW_ITEM_DETAILS: {
      return {
        ...state,
        displayedItem: action.item,
        modalOpen: true,
      }
    }
    case DELETE_ITEM_DETAILS: {
      return {
        ...state,
        displayedItem: null,
        modalOpen: false,
      }
    }
    default: {
      return state;
    }
  }
}