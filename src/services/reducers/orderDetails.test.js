import {
  POST_ITEM_REQUEST,
  POST_ITEM_SUCCESS,
  POST_ITEM_FAILED,
  CLEAR_ORDER_NUMBER,
} from "../actions/orderDetails";
import { orderDetailsReducer } from "./orderDetails";

describe("orderDetailsReducer", () => {
  const orderDetails = {
    orderName: "",
    orderNumber: null,
    orderSuccess: false,
    orderRequest: false,
    orderFailed: false,
  };

  it("orderDetails", () => {
    expect(orderDetailsReducer(undefined, {})).toEqual({
      ...orderDetails,
    });
  });

  it("should handle POST_ITEM_REQUEST", () => {
    const action = { type: POST_ITEM_REQUEST };
    expect(orderDetailsReducer(orderDetails, action)).toEqual({
      ...orderDetails,
      orderRequest: true,
    });
  });

  it("should handle POST_ITEM_SUCCESS", () => {
    const orderDetails = {
      name: "test",
      order: { number: "123456" },
      success: true,
    };
    const action = { type: POST_ITEM_SUCCESS, orderDetails };
    expect(orderDetailsReducer(orderDetails, action)).toEqual({
      ...orderDetails,
      orderName: "test",
      orderNumber: "123456",
      orderSuccess: true,
      orderRequest: false,
      orderFailed: false,
    });
  });

  it("should handle POST_ITEM_FAILED", () => {
    const orderDetails = {
      success: false,
    };
    const action = { type: POST_ITEM_FAILED, orderDetails };
    expect(orderDetailsReducer(orderDetails, action)).toEqual({
      ...orderDetails,
      orderName: "",
      orderNumber: null,
      orderSuccess: false,
      orderRequest: false,
      orderFailed: true,
    });
  });
  it("should handle CLEAR_ORDER_NUMBER", () => {
    const orderDetails = {
      name: "",
      order: { number: null },
    };
    const action = { type: CLEAR_ORDER_NUMBER, orderDetails };
    expect(orderDetailsReducer(orderDetails, action)).toEqual({
      ...orderDetails,
      orderName: "",
      orderNumber: null,
    });
  });
});
