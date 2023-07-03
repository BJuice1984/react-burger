import { CheckAuthType } from "../../utils/types";
import { AUTH_CHECKED, AuthCheckedTypes } from "../actions/checkAuth";

const checkDetails: CheckAuthType = {
  authChecked: false,
  authFetchRequest: false,
}

export const checkAuthReducer = (state = checkDetails, action: AuthCheckedTypes): CheckAuthType => {
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