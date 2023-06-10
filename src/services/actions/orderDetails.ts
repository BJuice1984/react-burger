import { postIngridients } from "../../utils/IngridientsApi";
import { AppDisatch } from "../types";

export const POST_ITEM_REQUEST = 'POST_ITEM_REQUEST';
export const POST_ITEM_SUCCESS = 'POST_ITEM_SUCCESS';
export const POST_ITEM_FAILED = 'POST_ITEM_FAILED';
export const CLEAR_ORDER_NUMBER = 'CLEAR_ORDER_NUMBER';

interface IPostItemRequest {
  readonly type: typeof POST_ITEM_REQUEST
};

interface IPostItemSuccess {
  readonly type: typeof POST_ITEM_SUCCESS,
  orderDetails: {
    name: string,
    success: boolean,
    order: {
      number: number
    }
  }
};

interface IPostItemFailed {
  readonly type: typeof POST_ITEM_FAILED,
  orderDetails: {
    success: boolean,
  }
};

interface IClearOrderNumber {
  readonly type: typeof CLEAR_ORDER_NUMBER
};

export type OrderDetailsActionTypes = IPostItemRequest
  | IPostItemSuccess
  | IPostItemFailed
  | IClearOrderNumber;

export const postItems = (ingredientsId: Array<string>) => {
  return function(dispatch: AppDisatch) {
    dispatch({ type: POST_ITEM_REQUEST})
    postIngridients(ingredientsId).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_ITEM_SUCCESS,
          orderDetails: res
        })
      } else {
        dispatch({
          type: POST_ITEM_FAILED,
          orderDetails: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_ITEM_FAILED,
        orderDetails: err
      })
    })
  }
}