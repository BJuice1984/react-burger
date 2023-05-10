import { POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_FETCH_FAILED } from "../actions/profile";

const profileDetails = {
  profileEmail: null,
  profileName: null,
  profileRefreshToken: JSON.parse(sessionStorage.getItem('refreshToken')) || null,
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
        profileRefreshToken: '',
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