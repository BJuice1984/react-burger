import { getIngridients } from '../../utils/IngridientsApi';
import { IngredientType } from '../../utils/types';
import { AppDispatch } from '../types';

export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILED = 'GET_ITEM_FAILED';

interface IGetItemRequest {
  readonly type: typeof GET_ITEM_REQUEST;
};
interface IGetItemSuccess {
  readonly type: typeof GET_ITEM_SUCCESS;
  items: Array<IngredientType>
};
interface IGetItemFailed {
  readonly type: typeof GET_ITEM_FAILED;
};

export type InitialItemsActionTypes = IGetItemRequest
  | IGetItemSuccess
  | IGetItemFailed;

export const getItems = () => {
  return function(dispatch: AppDispatch) {
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