import { useState, useEffect, FormEvent } from "react";
import { EmailInput, PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../components/Login/login.module.css";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "../hooks/hooks";
import { postForgotPassword, resetForgotPassword, POST_FORGOT_PASSWORD_FAILED } from "../services/actions/forgotPassword";
import { postForgotPasswordIsUserExist } from "../services/selectors/forgotPassword";

export default function ForgotPassword() {
  const [emailCode, setEmailcode] = useState<boolean>(false);
  const {values, handleChange } = useForm({});

  const dispatch = useDispatch();
  const isUserExist = useSelector(postForgotPasswordIsUserExist);

  useEffect(() => {
    if (isUserExist) return setEmailcode(true)
    return setEmailcode(false)
  }, [emailCode, isUserExist]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailCode) {

      dispatch(postForgotPassword(values.email))
    } else if (isUserExist) {

      dispatch(resetForgotPassword(values.password, values.code))
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
      <form
      className={ styles.form }
      onSubmit={handleSubmit}>
        {emailCode ? <PasswordInput
          onChange={handleChange}
          value={values.password || ''}
          name={'password'}
          placeholder='Введите новый пароль'
          extraClass="mb-6"
        /> : <EmailInput
          onChange={handleChange}
          value={values.email || ''}
          name={'email'}
          placeholder='Укажите e-mail'
          isIcon={false}
          extraClass="mb-6"
        />}
        {emailCode && <Input
          onChange={handleChange}
          value={values.code || ''}
          name={'code'}
          placeholder='Введите код из письма'
          extraClass="mb-6"
        />}
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={`${styles.button} mb-20`}>
          {emailCode ? 'Сохранить' : 'Восстановить'}
        </Button>
      </form>
      <p className={`${styles.login_text} text text_type_main-small`}>Вспомнили пароль? <Link className={`${styles.login_link} text text_type_main-small`} to="/sign-in">Войти</Link></p>
    </section>
  )
}