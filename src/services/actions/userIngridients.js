import uuid from 'react-uuid';

export const ADD_USER_ITEM = 'ADD_USER_ITEM';
export const MOVE_USER_ITEM = 'MOVE_USER_ITEM';

export const addIngridientId = (ingridient) => {
  return {
    type: ADD_USER_ITEM,
    ingridient: {...ingridient, id: uuid()}
  }
}