import { POST_ITEM_REQUEST, POST_ITEM_SUCCESS, POST_ITEM_FAILED, CLEAR_ORDER_NUMBER } from "../actions/orderDetails";

const orderDetails = {
  orderName: '',
  orderNumber: null,
  orderSuccess: false,
  orderRequest: false,
  orderFailed: false,
}

export const orderDetailsReducer = (state = orderDetails, action) => {
  switch (action.type) {
    case POST_ITEM_REQUEST: {
      return {
        ...state,
        orderRequest: true 
      }
    }
    case POST_ITEM_SUCCESS: {
      return {
        ...state,
        orderName: action.orderDetails.name,
        orderNumber: action.orderDetails.order.number,
        orderSuccess: action.orderDetails.success,
        orderRequest: false,
        orderFailed: false,
      }
    }
    case POST_ITEM_FAILED: {
      return {
        ...state,
        orderName: '',
        orderNumber: null,
        orderSuccess: action.orderDetails.success ? action.orderDetails.success : action.orderDetails,
        orderRequest: false,
        orderFailed: true,
      }
    }
    case CLEAR_ORDER_NUMBER: {
      return {
        ...state,
        orderName: '',
        orderNumber: null,
      }
    }
    default: {
      return state;
    }
  }
}