import { useState, useEffect } from "react";
import { EmailInput, PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Login/login.module.css";
import { Link } from "react-router-dom";
// import { FORGOT_PASSWORD, USER_IS_NOT_EXIST } from "../../constants/constants";
import { SHOW_ITEM_DETAILS } from "../../services/actions/modalDetails";
import { useDispatch, useSelector } from "react-redux";
import { postForgotPassword, resetForgotPassword } from "../../services/actions/forgotPassword";
import { postForgotPasswordIsUserExist, postForgotPasswordFailed } from "../../services/selectors/forgotPassword";
import { POST_FORGOT_PASSWORD_FAILED } from "../../services/actions/forgotPassword";

export default function ForgotPassword() {
  const [emailCode, setEmailcode] = useState(false);
  const [value, setValue] = useState({
    email: '',
    password: '',
    code: '',
  });

  const dispatch = useDispatch();
  const isUserExist = useSelector(postForgotPasswordIsUserExist);
  const forgotPasswordFailed = useSelector(postForgotPasswordFailed)

  const handleChange = e => {
    const {name, value} = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    if (isUserExist) return setEmailcode(true)
    return setEmailcode(false)
  }, [emailCode, isUserExist]);

  useEffect(() => {
    if (forgotPasswordFailed) {
      dispatch({
        type: SHOW_ITEM_DETAILS,
        items: false
      })
    }
  }, [dispatch, forgotPasswordFailed])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailCode) {
      dispatch(postForgotPassword(value.email))
    } else if (isUserExist) {
      dispatch(resetForgotPassword(value.password, value.code))
    } else {
      setEmailcode(false);
      dispatch({
        type: POST_FORGOT_PASSWORD_FAILED
      })
    }
  }

  return (
    <section className={ styles.login }>
      <h2 className={`${styles.header} text text_type_main-medium pb-6`}>Восстановление пароля</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        {emailCode ? <PasswordInput
          onChange={handleChange}
          value={value.password}
          name={'password'}
          placeholder='Введите новый пароль'
          extraClass="mb-6"
        /> : <EmailInput
          onChange={handleChange}
          value={value.email}
          name={'email'}
          placeholder='Укажите e-mail'
          isIcon={false}
          extraClass="mb-6"
        />}
        {emailCode && <Input
          onChange={handleChange}
          value={value.code}
          name={'code'}
          placeholder='Введите код из письма'
          extraClass="mb-6"
        />}
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          extraClass={`${styles.button} mb-20`}
          onClick={handleSubmit}>
          {emailCode ? 'Сохранить' : 'Восстановить'}
        </Button>
      </form>
      <p className={`${styles.login_text} text text_type_main-small`}>Вспомнили пароль? <Link className={`${styles.login_link} text text_type_main-small`} to="/sign-in">Войти</Link></p>
    </section>
  )
}