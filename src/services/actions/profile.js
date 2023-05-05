import * as Auth from '../../utils/mainApi';

export const POST_FETCH_REQUEST = 'POST_FETCH_REQUEST';
export const POST_FETCH_SUCCESS = 'POST_FETCH_SUCCESS';
export const POST_FETCH_FAILED = 'POST_FETCH_FAILED';

export const postRegister = (email, password, name) => {
  return function(dispatch) {
    dispatch({ type: POST_FETCH_REQUEST})
    Auth.register(email, password, name).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_FETCH_SUCCESS,
          forgotPassword: res
        })
      } else {
        dispatch({
          type: POST_FETCH_FAILED,
          forgotPassword: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FETCH_FAILED,
        forgotPassword: err
      })
    })
  }
};

export const postLogin = (email, password) => {
  return function(dispatch) {
    dispatch({ type: POST_FETCH_REQUEST})
    Auth.login(email, password).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_FETCH_SUCCESS,
          forgotPassword: res
        })
      } else {
        dispatch({
          type: POST_FETCH_FAILED,
          forgotPassword: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FETCH_FAILED,
        forgotPassword: err
      })
    })
  }
};

export const postLogout = (token) => {
  return function(dispatch) {
    dispatch({ type: POST_FETCH_REQUEST})
    Auth.logout(token).then(res => {
      if (res && res.success) {
        dispatch({
          type: POST_FETCH_SUCCESS,
          forgotPassword: res
        })
      } else {
        dispatch({
          type: POST_FETCH_FAILED,
          forgotPassword: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FETCH_FAILED,
        forgotPassword: err
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
          forgotPassword: res
        })
      } else {
        dispatch({
          type: POST_FETCH_FAILED,
          forgotPassword: res
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_FETCH_FAILED,
        forgotPassword: err
      })
    })
  }
};