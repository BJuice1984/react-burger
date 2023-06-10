import { RootState } from "../types";

export const getOrderNumber = (state: RootState) => state.orderDetails.orderNumber;