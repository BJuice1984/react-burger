import * as Auth from '../../utils/mainApi';
import { AppDispatch } from '../types';
import { setToken, clearToken, setCookie, deleteCookie } from '../../utils/helper';

export const POST_FETCH_REQUEST = 'POST_FETCH_REQUEST';
export const POST_FETCH_SUCCESS = 'POST_FETCH_SUCCESS';
export const POST_FETCH_FAILED = 'POST_FETCH_FAILED';

export const POST_PROFILE_FETCH_SUCCESS = 'POST_PROFILE_FETCH_SUCCESS';
export const POST_PROFILE_LOGOUT = 'POST_PROFILE_LOGOUT';

type ProfileType = {
  success: boolean;
  user: {
    email: string;
    name: string;
  }
};

type ProfileWithTokenType = ProfileType & {
    refreshToken: string;
}

interface IPostFetchRequest {
  readonly type: typeof POST_FETCH_REQUEST;
};

interface IPostFetchSuccess {
  readonly type: typeof POST_FETCH_SUCCESS;
  profile: ProfileWithTokenType
};

interface IPostFetchFailed {
  readonly type: typeof POST_FETCH_FAILED;
};

interface IPostProfileFetchSuccess {
  readonly type: typeof POST_PROFILE_FETCH_SUCCESS;
  profile: ProfileType 
};

interface IPostProfileLogout {
  readonly type: typeof POST_PROFILE_LOGOUT;
};

export type ProfileActionTypes = IPostFetchRequest
  | IPostFetchSuccess
  | IPostFetchFailed
  | IPostProfileFetchSuccess
  | IPostProfileLogout

export const postRegister = (email: string, password: string, name: string) => {
  return function(dispatch: AppDispatch) {
    dispatch({ type: POST_FETCH_REQUEST})
    Auth.register(email, password, name).then(res => {
      if (res && res.success) {
        setToken('refreshToken', res.refreshToken);
        setCookie('token', res.accessToken);
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

export const postLogin = (email: string, password: string) => {
  return function(dispatch: AppDispatch) {
    dispatch({ type: POST_FETCH_REQUEST})
    Auth.login(email, password).then(res => {
      if (res && res.success) {
        setToken('refreshToken', res.refreshToken);
        setCookie('token', res.accessToken);
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
  return function(dispatch: AppDispatch) {
    dispatch({ type: POST_PROFILE_LOGOUT})
    Auth.logout().then(res => {
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
  return function(dispatch: AppDispatch) {
    dispatch({ type: POST_FETCH_REQUEST})
    Auth.getUser().then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_PROFILE_FETCH_SUCCESS,
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