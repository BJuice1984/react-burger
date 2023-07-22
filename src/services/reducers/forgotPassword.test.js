import {
  POST_FORGOT_PASSWORD_REQUEST,
  POST_FORGOT_PASSWORD_SUCCESS,
  POST_FORGOT_PASSWORD_FAILED,
} from "../actions/forgotPassword";
import { forgotPasswordReducer } from "./forgotPassword";

describe("forgotPasswordReducer", () => {
  const forgotPasswordDetails = {
    isUserExist: false,
    forgotPasswordSuccess: false,
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,
  };

  it("forgotPasswordReducer", () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual({
      ...forgotPasswordDetails,
    });
  });

  it("should handle POST_FORGOT_PASSWORD_REQUEST", () => {
    const action = { type: POST_FORGOT_PASSWORD_REQUEST };
    expect(forgotPasswordReducer(forgotPasswordDetails, action)).toEqual({
      ...forgotPasswordDetails,
      forgotPasswordRequest: true,
    });
  });

  it("should handle POST_FORGOT_PASSWORD_SUCCESS", () => {
    const forgotPassword = {
      isUserExist: true,
      success: true,
      forgotPasswordRequest: false,
      forgotPasswordFailed: false,
    };
    const action = { type: POST_FORGOT_PASSWORD_SUCCESS, forgotPassword };
    expect(forgotPasswordReducer(forgotPasswordDetails, action)).toEqual({
      ...forgotPasswordDetails,
      isUserExist: true,
      forgotPasswordSuccess: true,
      forgotPasswordRequest: false,
      forgotPasswordFailed: false,
    });
  });

  it("should handle POST_FORGOT_PASSWORD_FAILED", () => {
    const forgotPassword = {
      isUserExist: false,
      success: false,
      forgotPasswordRequest: false,
      forgotPasswordFailed: true,
    };
    const action = { type: POST_FORGOT_PASSWORD_FAILED, forgotPassword };
    expect(forgotPasswordReducer(forgotPasswordDetails, action)).toEqual({
      ...forgotPasswordDetails,
      forgotPasswordFailed: true,
    });
  });
});
