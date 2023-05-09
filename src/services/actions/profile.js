import * as Auth from '../../utils/mainApi';
import useSessionStorage from '../../hooks/useSessionStorage';
import useCookies from '../../hooks/useCookies';

export const POST_FETCH_REQUEST = 'POST_FETCH_REQUEST';
export const POST_FETCH_SUCCESS = 'POST_FETCH_SUCCESS';
export const POST_FETCH_FAILED = 'POST_FETCH_FAILED';

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
      dispatch({
        type: POST_FETCH_FAILED,
        profile: err
      })
    })
  }
};

export const postLogout = () => {
  return function(dispatch) {
    const { getToken, clearToken } = useSessionStorage();
    let token = getToken('refreshToken');

    dispatch({ type: POST_FETCH_REQUEST})
    Auth.logout(token).then(res => {
      if (res && res.success) {
        clearToken('refreshToken');
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
      dispatch({
        type: POST_FETCH_FAILED,
        profile: err
      })
    })
  }
};

export const postRefreshToken = (token) => {
  return function(dispatch) {
    dispatch({ type: POST_FETCH_REQUEST})
    Auth.refreshToken(token).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_FETCH_SUCCESS,
          profile: res
        })
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

export const getUser = () => {
  return function(dispatch) {
    const { getCookie } = useCookies();
    let cookie = getCookie('token');

    dispatch({ type: POST_FETCH_REQUEST})
    Auth.getUser(cookie).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_FETCH_SUCCESS,
          profile: res
        })
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