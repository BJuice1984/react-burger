import { RESET_PASSWORD_API, REGISTER_API, LOGIN_API, LOGOUT_API, REFRESH_TOKEN_API } from "../constants/constants";
import { emailType, passwordType, tokenType } from "./prop-types";

const checkResponse = (res) =>  {
  if (res.ok) {
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

export const logout = (token) => {
  return fetch(LOGOUT_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
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

forgotPassword.propTypes = {
  email: emailType.isRequired,
}

resetPassword.propTypes = {
  password: passwordType.isRequired,
  token: tokenType.isRequired,
}