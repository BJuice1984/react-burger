import { AUTH_CHECKED } from "../actions/checkAuth";

const checkDetails = {
  authChecked: false,
  authFetchRequest: false,
}

export const checkAuthReducer = (state = checkDetails, action) => {
  switch(action.type) {
    case AUTH_CHECKED: {
      return {
        ...state,
        authChecked: true,
        authFetchRequest: false,
      }
    }
    default: {
      return state;
    }
  }
}