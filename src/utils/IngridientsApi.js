import { INGRIDIENTS_API } from '../constants/constants';

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