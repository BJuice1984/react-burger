import { ForgotPasswordType } from "../../utils/types";
import { POST_FORGOT_PASSWORD_REQUEST, POST_FORGOT_PASSWORD_SUCCESS, POST_FORGOT_PASSWORD_FAILED, ForgotPasswordActionTypes } from "../actions/forgotPassword";

const forgotPasswordDetails: ForgotPasswordType = {
  isUserExist: false,
  forgotPasswordSuccess: false,
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
}

export const forgotPasswordReducer = (state = forgotPasswordDetails, action: ForgotPasswordActionTypes): ForgotPasswordType => {
  switch (action.type) {
    case POST_FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true
      }
    }
    case POST_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isUserExist: true,
        forgotPasswordSuccess: action.forgotPassword.success,
        forgotPasswordRequest: false,
        forgotPasswordFailed: false
      }
    }
    case POST_FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        isUserExist: false,
        forgotPasswordSuccess: false,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true
      }
    }
      default: {
        return state;
      }
  }
}