import { RESET_PASSWORD_API, REGISTER_API, LOGIN_API, LOGOUT_API, REFRESH_TOKEN_API, USER_API } from "../constants/constants";
import { request } from "./utilsApi";
import { emailType, passwordType, tokenType, nameType, cookieType } from "./prop-types";

export const register = (email, password, name) => {
  return request(REGISTER_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
};

export const login = (email, password) => {
  return request(LOGIN_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
};

export const logout = (token, cookie) => {
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

export const refreshToken = (token) => {
  return request(REFRESH_TOKEN_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
  })
};

export const forgotPassword = (email) => {
  return request(RESET_PASSWORD_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
};

export const resetPassword = (password, token) => {
  return request(`${RESET_PASSWORD_API}/reset`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, token })
  })
};

export const getUser = (cookie) => {
  return request(USER_API, {
    headers: {
      Authorization: 'Bearer ' + cookie
    },
  })
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