import { postIngridients } from "../../utils/IngridientsApi";

export const POST_ITEM_REQUEST = 'POST_ITEM_REQUEST';
export const POST_ITEM_SUCCESS = 'POST_ITEM_SUCCESS';
export const POST_ITEM_FAILED = 'POST_ITEM_FAILED';

export const postItems = (ingridients) => {
  return function(dispatch) {
    dispatch({ type: POST_ITEM_REQUEST})
    postIngridients(ingridients).then(res => {
      // console.log(res.status)
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
  }
}