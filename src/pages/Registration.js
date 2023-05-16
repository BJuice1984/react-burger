import { useEffect } from "react";
import { EmailInput, PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../components/Login/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_IN } from "../constants/constants";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { postRegister } from "../services/actions/profile";
import { postProfileRefreshToken } from "../services/selectors/profile";

export default function Registration() {
  const {values, handleChange } = useForm({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profileRefreshToken = useSelector(postProfileRefreshToken);


  useEffect(() => {
    if (profileRefreshToken !== null)
    return navigate(SIGN_IN)
  }, [navigate, profileRefreshToken])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegister(values.email, values.password, values.name))
  };


  return (
    <section className={ styles.login }>
      <h2 className={`${styles.header} text text_type_main-medium pb-6`}>Регистрация</h2>
      <form
      className={ styles.form }
      onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={values.name}
          name={'name'}
          placeholder="Имя"
          extraClass="mb-6"
        />
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={'email'}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={'password'}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={`${styles.button} mb-20`}>
          Зарегистрироваться
        </Button>
      </form>
      <p className={`${styles.login_text} text text_type_main-small`}>Уже зарегистрированы? <Link className={`${styles.login_link} text text_type_main-small`} to={SIGN_IN}>Войти</Link></p>
    </section>
  )
}