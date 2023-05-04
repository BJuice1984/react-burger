import { POST_FORGOT_PASSWORD_REQUEST, POST_FORGOT_PASSWORD_SUCCESS, POST_FORGOT_PASSWORD_FAILED } from "../actions/forgotPassword";

const forgotPasswordDetails = {
  isUserExist: false,
  forgotPasswordSuccess: false,
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
}

export const forgotPasswordReducer = (state = forgotPasswordDetails, action) => {
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