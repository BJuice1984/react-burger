import * as Auth from '../utils/mainApi';

export default function useLogin() {

  const forgotPassword = (email) => {
    return Auth.forgotPassword(email)
    .then((res) => {
      if (res && res.success) {

      }
    })
  }
}