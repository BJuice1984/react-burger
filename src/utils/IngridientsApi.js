import { INGRIDIENTS_API, ORDER_API } from '../constants/constants';
import { postIngridientsType } from './prop-types';

const checkResponse = (res) =>  {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка даных: ${res.status}`)
};

export const getIngridients = () => {
  return fetch(`${INGRIDIENTS_API}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then(checkResponse)
}

export const postIngridients = (ingridients) => {
  return fetch(`${ORDER_API}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ingridients)
  })
  .then(checkResponse)
}

postIngridients.propTypes = {
  ingridients: postIngridientsType.isRequired,
}