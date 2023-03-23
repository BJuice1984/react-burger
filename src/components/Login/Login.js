import { useState } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  }

  return (
    <section className={ styles.login }>
      <h2 className={`${styles.header} text text_type_main-medium pb-6`}>Вход</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <EmailInput
          onChange={onChange}
          value={value}
          name={'email'}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={onChange}
          value={value}
          name={'password'}
          extraClass="mb-6"
        />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={`${styles.button} mb-20`}>
        Войти
      </Button>
      <p className={`${styles.login_text} text text_type_main-small pb-4`}>Вы — новый пользователь? <Link className={`${styles.login_link} text text_type_main-small`} to="/sign-up">Зарегистрироваться</Link></p>
      <p className={`${styles.login_text} text text_type_main-small`}>Забыли пароль? <Link className={`${styles.login_link} text text_type_main-small`} to="/forgot-password">Восстановить пароль</Link></p>
    </section>
  )
}