import {
  POST_FETCH_REQUEST,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILED,
  POST_PROFILE_LOGOUT,
  POST_PROFILE_FETCH_SUCCESS,
} from "../actions/profile";
import { profileReducer } from "./profile";

describe("profileReducer", () => {
  const profileDetails = {
    profileEmail: null,
    profileName: null,
    profileRefreshToken: null,
    profileLogout: false,
    fetchSuccess: false,
    fetchRequest: false,
    fetchFailed: false,
  };

  it("profileDetails", () => {
    expect(profileReducer(undefined, {})).toEqual({
      ...profileDetails,
    });
  });

  it("should handle POST_FETCH_REQUEST", () => {
    const action = { type: POST_FETCH_REQUEST };
    expect(profileReducer(profileDetails, action)).toEqual({
      ...profileDetails,
      profileRefreshToken: null,
      fetchRequest: true,
    });
  });

  it("should handle POST_FETCH_SUCCESS", () => {
    const profile = {
      user: {
        email: "ilyas@mail.ru",
        name: "Ilyas",
      },
      refreshToken: "test_TOKEN",
      profileLogout: false,
      success: true,
      fetchRequest: false,
      fetchFailed: false,
    };
    const action = { type: POST_FETCH_SUCCESS, profile };
    expect(profileReducer(profileDetails, action)).toEqual({
      ...profileDetails,
      profileEmail: "ilyas@mail.ru",
      profileName: "Ilyas",
      profileRefreshToken: "test_TOKEN",
      profileLogout: false,
      fetchSuccess: true,
      fetchRequest: false,
      fetchFailed: false,
    });
  });

  it("should handle POST_PROFILE_FETCH_SUCCESS", () => {
    const profile = {
      user: {
        email: "ilyas@mail.ru",
        name: "Ilyas",
      },
      profileLogout: false,
      success: true,
      fetchRequest: false,
      fetchFailed: false,
    };
    const action = { type: POST_PROFILE_FETCH_SUCCESS, profile };
    expect(profileReducer(profileDetails, action)).toEqual({
      ...profileDetails,
      profileEmail: "ilyas@mail.ru",
      profileName: "Ilyas",
      profileLogout: false,
      fetchSuccess: true,
      fetchRequest: false,
      fetchFailed: false,
    });
  });

  it("should handle POST_FETCH_FAILED", () => {
    const profile = {
      user: {
        email: null,
        name: null,
      },
      refreshToken: null,
      profileLogout: false,
      success: false,
      fetchRequest: false,
      fetchFailed: true,
    };
    const action = { type: POST_FETCH_FAILED, profile };
    expect(profileReducer(profileDetails, action)).toEqual({
      ...profileDetails,
      profileEmail: null,
      profileName: null,
      profileRefreshToken: null,
      profileLogout: false,
      fetchSuccess: false,
      fetchRequest: false,
      fetchFailed: true,
    });
  });

  it("should handle POST_PROFILE_LOGOUT", () => {
    const profile = {
      user: {
        email: "",
        name: "",
      },
      refreshToken: null,
      profileLogout: true,
      success: false,
      fetchRequest: false,
      fetchFailed: true,
    };
    const action = { type: POST_PROFILE_LOGOUT, profile };
    expect(profileReducer(profileDetails, action)).toEqual({
      ...profileDetails,
      profileLogout: true,
      fetchFailed: true,
    });
  });
});
