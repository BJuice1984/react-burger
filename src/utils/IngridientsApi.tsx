import { INGRIDIENTS_API, ORDER_API } from '../constants/constants';
import { request } from './utilsApi';
import { getCookie } from './helper';

export const getIngridients = () => {
  return request(INGRIDIENTS_API, {})
}

export const postIngridients = (ingridientsId: Array<string>) => {
  const cookie = getCookie('token');
  return request(ORDER_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + cookie
    },
    body: JSON.stringify({"ingredients": ingridientsId})
  })
}
