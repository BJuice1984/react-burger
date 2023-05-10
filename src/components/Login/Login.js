import { useState, useEffect } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_UP, FORGOT_PASSWORD } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../services/actions/profile";
import { postProfileRefreshToken } from "../../services/selectors/profile";

export default function Login() {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profileRefreshToken = useSelector(postProfileRefreshToken);

  const handleChange = e => {
    const {name, value} = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    if (profileRefreshToken)
    return navigate('/')
  }, [navigate, profileRefreshToken])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(value.email, value.password))
  };

  return (
    <section className={ styles.login }>
      <h2 className={`${styles.header} text text_type_main-medium pb-6`}>Вход</h2>
      <form 
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleSubmit}>
        <EmailInput
          onChange={handleChange}
          value={value.email}
          name={'email'}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={value.password}
          name={'password'}
          extraClass="mb-6"
        />
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          extraClass={`${styles.button} mb-20`}
          onClick={handleSubmit}>
          Войти
        </Button>
      </form>
      <p className={`${styles.login_text} text text_type_main-small pb-4`}>Вы — новый пользователь? <Link className={`${styles.login_link} text text_type_main-small`} to={SIGN_UP}>Зарегистрироваться</Link></p>
      <p className={`${styles.login_text} text text_type_main-small`}>Забыли пароль? <Link className={`${styles.login_link} text text_type_main-small`} to={FORGOT_PASSWORD}>Восстановить пароль</Link></p>
    </section>
  )
}