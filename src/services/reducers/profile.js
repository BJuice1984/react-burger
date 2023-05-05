import { POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_FETCH_FAILED } from "../actions/profile";

const profileDetails = {
  profileEmail: '',
  profileName: '',
  profilePassword: '',
  profileToken: '',
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
        profileEmail: action.profile.email,
        profileName: action.profile.name,
        profilePassword: action.profile.password,
        profileToken: action.profile.token,
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