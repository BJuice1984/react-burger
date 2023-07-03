import { RootState } from "../types";

export const getOrderNumber = (state: RootState) => state.orderDetails.orderNumber;
export const fetchOrderRequest = (state: RootState) => state.orderDetails.orderRequest;