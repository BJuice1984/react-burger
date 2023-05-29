interface IResponse<T> extends Response {
  json(): Promise<T>
}

function checkResponse<T>(res: IResponse<T>): Promise<T> {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка даных: ${res.status}`)
};

export const request = (url: RequestInfo | URL, options: RequestInit | undefined) => {
  return fetch(url, options).then(checkResponse)
}