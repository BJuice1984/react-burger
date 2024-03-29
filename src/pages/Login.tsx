import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../components/Login/login.module.css";
import { Link } from "react-router-dom";
import { SIGN_UP, FORGOT_PASSWORD } from "../constants/constants";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "../hooks/hooks";
import { postLogin } from "../services/actions/profile";
import { FormEvent } from "react";
import { fetchLoginRequest } from "../services/selectors/profile";
import Preloader from "../components/Preloader/Preloader";

export default function Login() {
  const {values, handleChange } = useForm({});
  const isFetchLoginRequest = useSelector(fetchLoginRequest);

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(postLogin(values.email, values.password))
  };

  return (
    isFetchLoginRequest ? <Preloader /> : 
    (<section className={ styles.login }>
      <h2 className={`${styles.header} text text_type_main-medium pb-6`}>Вход</h2>
      <form
      className={ styles.form }
      onSubmit={handleSubmit}>
        <EmailInput
          onChange={handleChange}
          value={values.email || ''}
          name="email"
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password || ''}
          name="password"
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={`${styles.button} mb-20`}>
          Войти
        </Button>
      </form>
      <p className={`${styles.login_text} text text_type_main-small pb-4`}>Вы — новый пользователь? <Link className={`${styles.login_link} text text_type_main-small`} to={SIGN_UP}>Зарегистрироваться</Link></p>
      <p className={`${styles.login_text} text text_type_main-small`}>Забыли пароль? <Link className={`${styles.login_link} text text_type_main-small`} to={FORGOT_PASSWORD}>Восстановить пароль</Link></p>
    </section>)
  )
}