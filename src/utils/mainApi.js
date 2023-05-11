import { RESET_PASSWORD_API, REGISTER_API, LOGIN_API, LOGOUT_API, REFRESH_TOKEN_API, USER_API } from "../constants/constants";
import { emailType, passwordType, tokenType, nameType, cookieType } from "./prop-types";

const checkResponse = (res) => {
  if (res.ok || res.status === 403) {
    return res.json();
  }
  return Promise.reject(`Ошибка даных: ${res.status}`)
};

export const register = (email, password, name) => {
  return fetch(REGISTER_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
  .then(checkResponse)
};

export const login = (email, password) => {
  return fetch(LOGIN_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(checkResponse)
};

export const logout = (token, cookie) => {
  return fetch(LOGOUT_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + cookie
    },
    body: JSON.stringify({ token })
  })
  .then(checkResponse)
};

export const refreshToken = (token) => {
  return fetch(REFRESH_TOKEN_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
  })
  .then(checkResponse)
};

export const forgotPassword = (email) => {
  return fetch(RESET_PASSWORD_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  .then(checkResponse)
};

export const resetPassword = (password, token) => {
  return fetch(`${RESET_PASSWORD_API}/reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, token })
  })
  .then(checkResponse)
};

export const getUser = (cookie) => {
  return fetch(USER_API, {
    headers: {
      Authorization: 'Bearer ' + cookie
    },
  })
  .then(checkResponse)
};

forgotPassword.propTypes = {
  email: emailType.isRequired,
};

resetPassword.propTypes = {
  password: passwordType.isRequired,
  token: tokenType.isRequired,
};

refreshToken.propTypes = {
  token: tokenType.isRequired,
};

logout.propTypes = {
  token: tokenType.isRequired,
};

login.propTypes = {
  email: emailType.isRequired,
  password: passwordType.isRequired,
};

register.propTypes = {
  email: emailType.isRequired,
  password: passwordType.isRequired,
  name: nameType.isRequired,
};

getUser.propTypes = {
  cookie: cookieType.isRequired,
};