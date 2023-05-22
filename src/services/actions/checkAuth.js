import useCookies from "../../hooks/useCookies";
import { getUser } from "./profile";

export const AUTH_CHECKED = 'AUTH_CHECKED';

export const checkAuth = () => {
  return function(dispatch) {
    const { getCookie } = useCookies();
    let cookie = getCookie('token');

    if (cookie) {
      dispatch({ type: AUTH_CHECKED });
      dispatch(getUser());
    } else {
      dispatch({ type: AUTH_CHECKED });
    }

  }
}
