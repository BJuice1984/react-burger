import { RESET_PASSWORD_API } from "../constants/constants";
import { emailType, passwordType, tokenType } from "./prop-types";

const checkResponse = (res) =>  {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка даных: ${res.status}`)
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