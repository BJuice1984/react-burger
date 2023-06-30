import { RESET_PASSWORD_API, REGISTER_API, LOGIN_API, LOGOUT_API, USER_API, ORDER_API } from "../constants/constants";
import { getCookie, getToken } from "./helper";
import { request, requestWithRefresh } from "./utilsApi";

const token = getToken('refreshToken');
const cookie = getCookie('token');

export const register = (email: string, password: string, name: string) => {
  return request(REGISTER_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
};

export const login = (email: string, password: string) => {
  return request(LOGIN_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
};

export const logout = () => {
  return requestWithRefresh(LOGOUT_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + cookie
    },
    body: JSON.stringify({ token })
  })
};

export const forgotPassword = (email: string) => {
  return request(RESET_PASSWORD_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
};

export const resetPassword = (password: string) => {
  return requestWithRefresh(`${RESET_PASSWORD_API}/reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, token })
  })
};

export const getUser = () => {
  console.log('getUser')
  return requestWithRefresh (USER_API, {
    headers: {
      Authorization: 'Bearer ' + cookie
    },
  })
};

export const getOrder = (number: string) => {
  return request(`${ORDER_API}/${number}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
};
