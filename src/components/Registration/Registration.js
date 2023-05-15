import { useEffect, useState } from "react";
import { EmailInput, PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Login/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { postRegister } from "../../services/actions/profile";
import { postProfileRefreshToken } from "../../services/selectors/profile";

export default function Registration() {
  const [value, setValue] = useState({
    email: 'bob_johns@example.com',
    password: '',
    name: '',
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
    if (profileRefreshToken !== null)
    return navigate(SIGN_IN)
  }, [navigate, profileRefreshToken])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegister(value.email, value.password, value.name))
  };


  return (
    <section className={ styles.login }>
      <h2 className={`${styles.header} text text_type_main-medium pb-6`}>Регистрация</h2>
      <form
      className={ styles.form }
      onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={value.name}
          name={'name'}
          placeholder="Имя"
          extraClass="mb-6"
        />
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