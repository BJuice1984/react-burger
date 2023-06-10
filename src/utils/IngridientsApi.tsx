import { INGRIDIENTS_API, ORDER_API } from '../constants/constants';
import { request } from './utilsApi';

export const getIngridients = () => {
  return request(INGRIDIENTS_API, {})
}

export const postIngridients = (ingridientsId: Array<string>) => {
  return request(ORDER_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ingridientsId)
  })
}
