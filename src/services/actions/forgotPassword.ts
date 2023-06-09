import * as Auth from '../../utils/mainApi';
import { AppDisatch } from '../types';

export const POST_FORGOT_PASSWORD_REQUEST = 'POST_FORGOT_PASSWORD_REQUEST';
export const POST_FORGOT_PASSWORD_SUCCESS = 'POST_FORGOT_PASSWORD_SUCCESS';
export const POST_FORGOT_PASSWORD_FAILED = 'POST_FORGOT_PASSWORD_FAILED';

interface IPostForgotPasswordRequest {
  readonly type: typeof POST_FORGOT_PASSWORD_REQUEST
};

interface IPostForgotPasswordSuccess {
  readonly type: typeof POST_FORGOT_PASSWORD_SUCCESS;
  forgotPassword: {
    success: boolean
  }
};

interface IPostForgotPasswordFailed {
  readonly type: typeof POST_FORGOT_PASSWORD_FAILED
};

export type ForgotPasswordActionTypes = IPostForgotPasswordRequest
  | IPostForgotPasswordSuccess
  | IPostForgotPasswordFailed;

export const postForgotPassword = (email: string) => {
  return function(dispatch: AppDisatch) {
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

export const resetForgotPassword = (newPassword: string, code: string) => {
  return function(dispatch: AppDisatch) {
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