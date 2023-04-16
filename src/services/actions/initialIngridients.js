import { getIngridients } from '../../utils/IngridientsApi';

export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILED = 'GET_ITEM_FAILED';

export const getItems = () => {
  return function(dispatch) {
    dispatch({ type: GET_ITEM_REQUEST })
    getIngridients().then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ITEM_SUCCESS,
          items: res.data
        })
      } else {
        dispatch({ type: GET_ITEM_FAILED })
      }
    })
    .catch((err) => {
      dispatch({ type: GET_ITEM_FAILED })
      console.log(err)
    })
  }
}