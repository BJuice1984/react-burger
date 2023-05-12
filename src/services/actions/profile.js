import * as Auth from '../../utils/mainApi';
import useSessionStorage from '../../hooks/useSessionStorage';
import useCookies from '../../hooks/useCookies';
import useRefreshToken from '../../hooks/useRefreshToken';

export const POST_FETCH_REQUEST = 'POST_FETCH_REQUEST';
export const POST_FETCH_SUCCESS = 'POST_FETCH_SUCCESS';
export const POST_FETCH_FAILED = 'POST_FETCH_FAILED';

export const POST_PROFILE_FETCH_SUCCESS = 'POST_PROFILE_FETCH_SUCCESS';
export const POST_PROFILE_LOGOUT = 'POST_PROFILE_LOGOUT';

export const postRegister = (email, password, name) => {
  return function(dispatch) {
    const { setToken, clearToken } = useSessionStorage();
    const { setCookie } = useCookies();

    dispatch({ type: POST_FETCH_REQUEST})
    Auth.register(email, password, name).then(res => {
      if (res && res.success) {
        setToken('refreshToken', res.refreshToken);
        setCookie('token', res);
        dispatch({
          type: POST_FETCH_SUCCESS,
          profile: res
        })
      } else {
        clearToken('refreshToken');
        dispatch({
          type: POST_FETCH_FAILED,
          profile: res
        })
      }
    })
    .catch((err) => {
      clearToken('refreshToken');
      dispatch({
        type: POST_FETCH_FAILED,
        profile: err
      })
    })
  }
};

export const postLogin = (email, password) => {
  return function(dispatch) {
    const { setToken, clearToken } = useSessionStorage();
    const { setCookie } = useCookies();

    dispatch({ type: POST_FETCH_REQUEST})
    Auth.login(email, password).then(res => {
      if (res && res.success) {
        setToken('refreshToken', res.refreshToken);
        setCookie('token', res);
        dispatch({
          type: POST_FETCH_SUCCESS,
          profile: res
        })
      } else {
        clearToken('refreshToken');
        dispatch({
          type: POST_FETCH_FAILED,
          profile: res
        })
      }
    })
    .catch((err) => {
      clearToken('refreshToken');
      dispatch({
        type: POST_FETCH_FAILED,
        profile: err
      })
    })
  }
};

export const postLogout = () => {
  return function(dispatch) {
    const { deleteCookie, getCookie } = useCookies();
    const { clearToken } = useSessionStorage();
    let cookie = getCookie('token');
    let token = JSON.parse(sessionStorage.getItem('refreshToken'));

    dispatch({ type: POST_PROFILE_LOGOUT})
    Auth.logout(token, cookie).then(res => {
      if (res && res.success) {
        clearToken('refreshToken');
        deleteCookie('token');
      } else {
        clearToken('refreshToken');
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FETCH_FAILED,
        profile: err
      })
    })
  }
};

export const getUser = () => {
  return function(dispatch) {
    const { deleteCookie, getCookie } = useCookies();
    let cookie = getCookie('token');
    const { postRefreshToken } = useRefreshToken();

    dispatch({ type: POST_FETCH_REQUEST})
    Auth.getUser(cookie).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_PROFILE_FETCH_SUCCESS,
          profile: res
        })
      } else if (res.message === 'jwt malformed') {
        postRefreshToken();
      } else if (res.message === 'invalid signature') {
        deleteCookie('token');
        postRefreshToken();
      } else {
        dispatch({
          type: POST_FETCH_FAILED,
          profile: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FETCH_FAILED,
        profile: err
      })
    })
  }
};