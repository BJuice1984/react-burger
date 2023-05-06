import { POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_FETCH_FAILED } from "../actions/profile";

const profileDetails = {
  profileEmail: null,
  profileName: null,
  profileAccessToken: null,
  profileRefreshToken: null,
  fetchSuccess: false,
  fetchRequest: false,
  fetchFailed: false,
};

export const profileReducer = (state = profileDetails, action) => {
  switch(action.type) {
    case POST_FETCH_REQUEST: {
      return {
        ...state,
        fetchRequest: true,
      }
    }
    case POST_FETCH_SUCCESS: {
      return {
        ...state,
        profileEmail: action.profile.user.email,
        profileName: action.profile.user.name,
        profileAccessToken: action.profile.accessToken,
        profileRefreshToken: action.profile.refreshToken,
        fetchSuccess: action.profile.success,
        fetchRequest: false,
        fetchFailed: false,
      }
    }
    case POST_FETCH_FAILED: {
      return {
        ...state,
        profileEmail: '',
        profileName: '',
        profilePassword: '',
        profileToken: '',
        fetchSuccess: false,
        fetchRequest: false,
        fetchFailed: true,
      }
    }
    default: {
      return state;
    }
  }
}