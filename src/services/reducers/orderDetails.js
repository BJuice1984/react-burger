import { POST_ITEM_REQUEST, POST_ITEM_SUCCESS, POST_ITEM_FAILED } from "../actions/orderDetails";

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
    default: {
      return state;
    }
  }
}