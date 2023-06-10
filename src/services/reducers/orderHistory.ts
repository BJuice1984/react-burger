import { OrderHistoryDetailsType } from "../../utils/types";
import { WS_CLOSE, WS_ERROR, WS_MESSAGE, WS_OPEN, WebSocketActionTypes } from "../actions/wsActions";

const orderHistoryDetails: OrderHistoryDetailsType = {
  connect: false,
  error: false,
  orderHistoryDetails: {
    success: false,
    orders: [],
    total: null,
    totalToday: null,
  }
};

export const orderHistoryReducer = (state = orderHistoryDetails, action: WebSocketActionTypes) => {
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
        orderHistoryDetails: {
          success: false,
          orders: [],
          total: null,
          totalToday: null,
        }
      }
    }
    case WS_ERROR: {
      return {
        ...state,
        connect: false,
        error: true,
        orderHistoryDetails: {
          success: false,
          orders: [],
          total: null,
          totalToday: null,
        }
      }
    }
    case WS_MESSAGE: {
      return {
        ...state,
        orderHistoryDetails: {
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