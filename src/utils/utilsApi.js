const checkResponse = (res) =>  {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка даных: ${res.status}`)
};

export const request = (url, options) => {
  return fetch(url, options).then(checkResponse)
}