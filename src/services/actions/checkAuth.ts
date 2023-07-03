import { AppDispatch } from "../types";
import { getCookie } from "../../utils/helper";
import { getUser } from "./profile";

export const AUTH_CHECKED = 'AUTH_CHECKED';

interface IAuthChecked {
  readonly type: typeof AUTH_CHECKED;
};

export type AuthCheckedTypes = IAuthChecked;

let cookie = getCookie('token');

export const checkAuth = () => {
  return function(dispatch: AppDispatch) {
    if (cookie) {
      dispatch(getUser());
    } 
    else {
      dispatch({ type: AUTH_CHECKED });
    }
  }
}
