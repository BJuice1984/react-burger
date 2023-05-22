import * as Auth from '../../utils/mainApi';

export const POST_FORGOT_PASSWORD_REQUEST = 'POST_FORGOT_PASSWORD_REQUEST';
export const POST_FORGOT_PASSWORD_SUCCESS = 'POST_FORGOT_PASSWORD_SUCCESS';
export const POST_FORGOT_PASSWORD_FAILED = 'POST_FORGOT_PASSWORD_FAILED';

export const postForgotPassword = (email) => {
  return function(dispatch) {
    dispatch({ type: POST_FORGOT_PASSWORD_REQUEST})
    Auth.forgotPassword(email).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_FORGOT_PASSWORD_SUCCESS,
          forgotPassword: res
        })
      } else {
        dispatch({
          type: POST_FORGOT_PASSWORD_FAILED,
          forgotPassword: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FORGOT_PASSWORD_FAILED,
        forgotPassword: err
      })
    })
  }
};

export const resetForgotPassword = (newPassword, code) => {
  return function(dispatch) {
    dispatch({ type: POST_FORGOT_PASSWORD_REQUEST})
    Auth.resetPassword(newPassword, code).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_FORGOT_PASSWORD_SUCCESS,
          forgotPassword: res
        })
      } else {
        dispatch({
          type: POST_FORGOT_PASSWORD_FAILED,
          forgotPassword: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FORGOT_PASSWORD_FAILED,
        forgotPassword: err
      })
    })
  }
}