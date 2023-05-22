import { postIngridients } from "../../utils/IngridientsApi";

export const POST_ITEM_REQUEST = 'POST_ITEM_REQUEST';
export const POST_ITEM_SUCCESS = 'POST_ITEM_SUCCESS';
export const POST_ITEM_FAILED = 'POST_ITEM_FAILED';
export const CLEAR_ORDER_NUMBER = 'CLEAR_ORDER_NUMBER';

export const postItems = (ingridients) => {
  return function(dispatch) {
    dispatch({ type: POST_ITEM_REQUEST})
    postIngridients(ingridients).then(res => {
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