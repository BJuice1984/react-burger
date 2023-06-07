import uuid from 'react-uuid';
import { IngredientType } from '../../utils/types';

export const ADD_USER_ITEM = 'ADD_USER_ITEM';
export const MOVE_USER_ITEM = 'MOVE_USER_ITEM';
export const DELETE_USER_ITEM = 'DELETE_USER_ITEM';

interface IAddUserItem {
  readonly type: typeof ADD_USER_ITEM;
  readonly ingredient: IngredientType & { id: string };
};
interface IMoveUserItem {
  to: number;
  from: number;
  readonly type: typeof MOVE_USER_ITEM;
};
interface IDeleteUserItem {
  ingredient: IngredientType & { id: string };
  readonly type: typeof DELETE_USER_ITEM;
};

export type UserItemsActionTypes = IAddUserItem
  | IMoveUserItem
  | IDeleteUserItem;

export const addIngridientId = (ingredient: IngredientType) => {
  return {
    type: ADD_USER_ITEM,
    ingridient: {...ingredient, id: uuid()}
  }
}