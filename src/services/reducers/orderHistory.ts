import { OrderHistoryDetailsType } from "../../utils/types";
import { WS_CLOSE, WS_ERROR, WS_MESSAGE, WS_OPEN, WebSocketActionTypes } from "../actions/wsActions";

const orderHistoryDetails: OrderHistoryDetailsType = {
  connect: false,
  error: false,
  orderDetails: {
    success: false,
    orders: [
      {
        ingredients: [],
        _id: '',
        status: '',
        name: '',
        number: NaN,
        createdAt: '',
        updatedAt: '',
      }
    ],
    total: NaN,
    totalToday: NaN,
  }
};

export const orderHistoryReducer = (state = orderHistoryDetails, action: WebSocketActionTypes): OrderHistoryDetailsType => {
  switch (action.type) {
    case WS_OPEN: {
      return {
        ...state,
        connect: true,
      }
    }
    case WS_CLOSE: {
      return {
        ...state,
        connect: false,
        error: false,
        orderDetails: {
          success: false,
          orders: [],
          total: NaN,
          totalToday: NaN,
        }
      }
    }
    case WS_ERROR: {
      return {
        ...state,
        connect: false,
        error: true,
        orderDetails: {
          success: false,
          orders: [],
          total: NaN,
          totalToday: NaN,
        }
      }
    }
    case WS_MESSAGE: {
      return {
        ...state,
        orderDetails: {
          success: action.payload.success,
          orders: action.payload.orders,
          total: action.payload.total,
          totalToday: action.payload.totalToday,
        }
      }
    }
    default: {
      return state;
    }
  }
}