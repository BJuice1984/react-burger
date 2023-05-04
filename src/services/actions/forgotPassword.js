import * as Auth from '../../utils/mainApi';

export const POST_FORGOT_PASSWORD_EMAIL_REQUEST = 'POST_FORGOT_PASSWORD_EMAIL_REQUEST';
export const POST_FORGOT_PASSWORD_EMAIL_SUCCESS = 'POST_FORGOT_PASSWORD_EMAIL_SUCCESS';
export const POST_FORGOT_PASSWORD_EMAIL_FAILED = 'POST_FORGOT_PASSWORD_EMAIL_FAILED';

export const POST_FORGOT_PASSWORD_PASSWORD = 'POST_FORGOT_PASSWORD_PASSWORD';
export const POST_FORGOT_PASSWORD_CODE = 'POST_FORGOT_PASSWORD_CODE';

export const postForgotPassword = (email) => {
  return function(dispatch) {
    dispatch({ type: POST_FORGOT_PASSWORD_EMAIL_REQUEST})
    Auth.forgotPassword(email).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_FORGOT_PASSWORD_EMAIL_SUCCESS,
          forgotPassword: res
        })
      } else {
        dispatch({
          type: POST_FORGOT_PASSWORD_EMAIL_FAILED,
          forgotPassword: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FORGOT_PASSWORD_EMAIL_FAILED,
        forgotPassword: err
      })
    })
  }
};

export const resetForgotPassword = (newPassword, code) => {
  return function(dispatch) {
    dispatch({ type: POST_FORGOT_PASSWORD_EMAIL_REQUEST})
    Auth.resetPassword(newPassword, code).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_FORGOT_PASSWORD_EMAIL_SUCCESS,
          forgotPassword: res
        })
      } else {
        dispatch({
          type: POST_FORGOT_PASSWORD_EMAIL_FAILED,
          forgotPassword: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FORGOT_PASSWORD_EMAIL_FAILED,
        forgotPassword: err
      })
    })
  }
}