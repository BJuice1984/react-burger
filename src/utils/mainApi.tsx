import { RESET_PASSWORD_API, REGISTER_API, LOGIN_API, LOGOUT_API, REFRESH_TOKEN_API, USER_API } from "../constants/constants";
import { request } from "./utilsApi";

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

export const logout = (token: string | null, cookie: string | null) => {
  return request(LOGOUT_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + cookie
    },
    body: JSON.stringify({ token })
  })
};

export const refreshToken = (token: string) => {
  return request(REFRESH_TOKEN_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
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

export const resetPassword = (password: string, token: string) => {
  return request(`${RESET_PASSWORD_API}/reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, token })
  })
};

export const getUser = (cookie: string | null) => {
  return request(USER_API, {
    headers: {
      Authorization: 'Bearer ' + cookie
    },
  })
};
