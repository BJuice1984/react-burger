import { WS_CLOSE, WS_ERROR, WS_MESSAGE, WS_OPEN } from "../actions/wsActions";
import { orderHistoryReducer } from "./orderHistory";

describe("orderHistoryReducer", () => {
  const orderHistoryDetails = {
    connect: false,
    error: false,
    orderDetails: {
      success: false,
      orders: [
        {
          ingredients: [],
          _id: "",
          status: "",
          name: "",
          number: null,
          createdAt: "",
          updatedAt: "",
        },
      ],
      total: null,
      totalToday: null,
    },
  };

  it("orderHistoryDetails", () => {
    expect(orderHistoryReducer(undefined, {})).toEqual({
      ...orderHistoryDetails,
    });
  });

  it("should handle WS_OPEN", () => {
    const action = { type: WS_OPEN };
    expect(orderHistoryReducer(orderHistoryDetails, action)).toEqual({
      ...orderHistoryDetails,
      connect: true,
    });
  });

  it("should handle WS_CLOSE", () => {
    const action = { type: WS_CLOSE };
    expect(orderHistoryReducer(orderHistoryDetails, action)).toEqual({
      ...orderHistoryDetails,
      connect: false,
      error: false,
      orderDetails: {
        success: false,
        orders: [],
        total: null,
        totalToday: null,
      },
    });
  });

  it("should handle WS_ERROR", () => {
    const action = { type: WS_ERROR };
    expect(orderHistoryReducer(orderHistoryDetails, action)).toEqual({
      ...orderHistoryDetails,
      connect: false,
      error: true,
      orderDetails: {
        success: false,
        orders: [],
        total: null,
        totalToday: null,
      },
    });
  });

  it("should handle WS_MESSAGE", () => {
    const payload = {
      success: true,
      orders: [
        {
          ingredients: ["123456", "654321"],
          _id: "1",
          status: "status",
          name: "test_Burger",
          number: 123456,
          createdAt: "test_Data",
          updatedAt: "test_Data",
        },
        {
          ingredients: ["123456", "654321"],
          _id: "2",
          status: "status",
          name: "test_Burger",
          number: 123456,
          createdAt: "test_Data",
          updatedAt: "test_Data",
        },
      ],
      total: "1000",
      totalToday: "50",
    };
    const action = { type: WS_MESSAGE, payload };
    expect(orderHistoryReducer(orderHistoryDetails, action)).toEqual({
      ...orderHistoryDetails,
      orderDetails: {
        success: true,
        orders: [
          {
            ingredients: ["123456", "654321"],
            _id: "1",
            status: "status",
            name: "test_Burger",
            number: 123456,
            createdAt: "test_Data",
            updatedAt: "test_Data",
          },
          {
            ingredients: ["123456", "654321"],
            _id: "2",
            status: "status",
            name: "test_Burger",
            number: 123456,
            createdAt: "test_Data",
            updatedAt: "test_Data",
          },
        ],
        total: "1000",
        totalToday: "50",
      },
    });
  });
});
