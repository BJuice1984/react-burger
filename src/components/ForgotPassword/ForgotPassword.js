import { useState, useEffect } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Login/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FORGOT_PASSWORD } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { postForgotPassword, resetForgotPassword } from "../../services/actions/forgotPassword";
import { postForgotPasswordIsUserExist } from "../../services/selectors/forgotPassword";

export default function ForgotPassword() {
  const [emailCode, setEmailcode] = useState(false);
  const [value, setValue] = useState({
    email: '',
    password: '',
    code: '',
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isUserExist = useSelector(postForgotPasswordIsUserExist);

  const handleChange = e => {
    const {name, value} = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    if (isUserExist) 
    return setEmailcode(true)
  }, [isUserExist]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailCode) {
      // console.log('handleSubmit')
      dispatch(postForgotPassword(value.email))
    } else if (isUserExist) {
      dispatch(resetForgotPassword(value.password, value.code))
      // console.log(value.password)
      // console.log(value.code)
    } else {
      navigate(FORGOT_PASSWORD)
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
        {emailCode && <EmailInput
          onChange={handleChange}
          value={value.code}
          name={'code'}
          placeholder='Введите код из письма'
          isIcon={false}
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