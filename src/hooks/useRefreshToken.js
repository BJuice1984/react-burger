import { refreshToken } from "../utils/mainApi";

function useRefreshToken() {

  function postRefreshToken() {
      let token = JSON.parse(sessionStorage.getItem('refreshToken'));
      refreshToken(token)
  };

  return {
    postRefreshToken,
  }
}

export default useRefreshToken;