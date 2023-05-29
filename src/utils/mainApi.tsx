import { RESET_PASSWORD_API, REGISTER_API, LOGIN_API, LOGOUT_API, REFRESH_TOKEN_API, USER_API } from "../constants/constants";
import { request } from "./utilsApi";

type EmailType = {
  email: string,
};

type PasswordType = {
  password: string,
};

type NameType = {
  name: string,
};

type CookieType = {
  cookie: string,
};

type TokenType = {
  token: string,
};

export const register = (email: EmailType, password: PasswordType, name: NameType) => {
  return request(REGISTER_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
};

export const login = (email: EmailType, password: PasswordType) => {
  return request(LOGIN_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
};

export const logout = (token: TokenType, cookie: CookieType) => {
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

export const forgotPassword = (email: EmailType) => {
  return request(RESET_PASSWORD_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
};

export const resetPassword = (password: PasswordType, token: TokenType) => {
  return request(`${RESET_PASSWORD_API}/reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, token })
  })
};

export const getUser = (cookie: CookieType) => {
  return request(USER_API, {
    headers: {
      Authorization: 'Bearer ' + cookie
    },
  })
};
