import { refreshToken } from "../utils/mainApi";
import useCookies from "./useCookies";
import useSessionStorage from "./useSessionStorage";

function useRefreshToken() {
  const { setCookie } = useCookies();
  const { setToken, getToken } = useSessionStorage();
  let token = getToken('refreshToken');

  function postRefreshToken() {
    if (token) 
    return refreshToken(token).then(res => {
      if (res && res.success) {
        setCookie('token', res);
        setToken('refreshToken', res.refreshToken);
      }
    })
  };

  return {
    postRefreshToken,
  }
}

export default useRefreshToken;