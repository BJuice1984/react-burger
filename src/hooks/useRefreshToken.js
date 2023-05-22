import { refreshToken } from "../utils/mainApi";
import useCookies from "./useCookies";
import useSessionStorage from "./useSessionStorage";

function useRefreshToken() {
  const { setCookie } = useCookies();
  const { setToken } = useSessionStorage();
  let token = JSON.parse(sessionStorage.getItem('refreshToken'));

  function postRefreshToken() {
    refreshToken(token).then(res => {
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