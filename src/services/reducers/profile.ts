import { ProfileDetailsType } from "../../utils/types";
import { POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_FETCH_FAILED, POST_PROFILE_LOGOUT, POST_PROFILE_FETCH_SUCCESS, ProfileActionTypes } from "../actions/profile";

function getToken() {
  let token = sessionStorage.getItem('refreshToken');
  if (token) return token;
}

const profileDetails: ProfileDetailsType = {
  profileEmail: null,
  profileName: null,
  profileRefreshToken: getToken() || null,
  profileLogout: false,
  fetchSuccess: false,
  fetchRequest: false,
  fetchFailed: false,
};

export const profileReducer = (state = profileDetails, action: ProfileActionTypes): ProfileDetailsType => {
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
        profileEmail: action.profile.user.email || null,
        profileName: action.profile.user.name || null,
        profileRefreshToken: action.profile.refreshToken || null,
        profileLogout: false,
        fetchSuccess: action.profile.success,
        fetchRequest: false,
        fetchFailed: false,
      }
    }
    case POST_PROFILE_FETCH_SUCCESS: {
      return {
        ...state,
        profileEmail: action.profile.user.email || null,
        profileName: action.profile.user.name || null,
        profileLogout: false,
        fetchSuccess: action.profile.success,
        fetchRequest: false,
        fetchFailed: false,
      }
    }
    case POST_FETCH_FAILED: {
      return {
        ...state,
        profileEmail: null,
        profileName: null,
        profileRefreshToken: null,
        profileLogout: false,
        fetchSuccess: false,
        fetchRequest: false,
        fetchFailed: true,
      }
    }
    case POST_PROFILE_LOGOUT: {
      return {
        ...state,
        profileEmail: null,
        profileName: null,
        profileRefreshToken: null,
        profileLogout: true,
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