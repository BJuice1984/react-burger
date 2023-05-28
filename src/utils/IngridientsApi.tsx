import { INGRIDIENTS_API, ORDER_API } from '../constants/constants';
import { request } from './utilsApi';
import { IngredientType } from './types';

export const getIngridients = () => {
  return request(INGRIDIENTS_API, {})
}

export const postIngridients = (ingridients: Array<IngredientType>) => {
  return request(ORDER_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ingridients)
  })
}
