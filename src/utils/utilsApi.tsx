import { REFRESH_TOKEN_API } from "../constants/constants";
import { getToken, setToken, setCookie, deleteCookie } from "./helper";

interface IResponse<T> extends Response {
  json(): Promise<T>
}

export function checkResponse<T>(res: IResponse<T>): Promise<T> {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
};

function refreshToken() {
  const token = getToken('refreshToken');
  return request(REFRESH_TOKEN_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
  })
};

export const request = (url: RequestInfo | URL, options: RequestInit | undefined) => {
  return fetch(url, options).then(checkResponse)
};

export const requestWithRefresh = (url: RequestInfo | URL, options: RequestInit | undefined) => {
  return fetch(url, options).then(checkResponse).catch(async (err) => {
    if (err.message === 'jwt expired') {
      const refreshData = await refreshToken();
      if (refreshData.success) {
        setToken('refreshToken', refreshData.refreshToken);
        setCookie('token', refreshData.accessToken);
        if (options?.headers) return (options.headers as { [key: string]: string }).authorization = refreshData.accessToken;
        return fetch(url, options).then(checkResponse)
      } else {
        return Promise.reject(`Ошибка даных: ${err}`)
      }
    } else if (err.message === 'Token is invalid') {
      deleteCookie('token');
    }
  })
};