import useCookies from "../../hooks/useCookies";
import { AppDispatch } from "../types";
// import { getUser } from "./profile";

export const AUTH_CHECKED = 'AUTH_CHECKED';

interface IAuthChecked {
  readonly type: typeof AUTH_CHECKED;
};

export type AuthCheckedTypes = IAuthChecked;

export const checkAuth = () => {
  return function(dispatch: AppDispatch) {
    const { getCookie } = useCookies();
    let cookie = getCookie('token');

    if (cookie) {
      dispatch({ type: AUTH_CHECKED });
      // dispatch(getUser());
    } 
    // else {
    //   dispatch({ type: AUTH_CHECKED });
    // }

  }
}
