import { useState } from "react";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../Login/login.module.css";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [value, setValue] = useState('bob@example.com')
  const onChange = e => {
    setValue(e.target.value)
  }

  const [emailCode, setEmailcode] = useState(false)

  return (
    <section className={ styles.login }>
      <h2 className={`${styles.header} text text_type_main-medium pb-6`}>Восстановление пароля</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {emailCode ? <PasswordInput
          onChange={onChange}
          value={value}
          name={'password'}
          placeholder='Введите новый пароль'
          extraClass="mb-6"
        /> : <EmailInput
          onChange={onChange}
          value={value}
          name={'email'}
          placeholder='Укажите e-mail'
          isIcon={false}
          extraClass="mb-6"
        />}
        {emailCode && <EmailInput
          onChange={onChange}
          value={value}
          name={'text'}
          placeholder='Введите код из письма'
          isIcon={false}
          extraClass="mb-6"
        />}
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={`${styles.button} mb-20`}
        onClick={() => setEmailcode(true)}>
        {emailCode ? 'Сохранить' : 'Восстановить'}
      </Button>
      <p className={`${styles.login_text} text text_type_main-small`}>Вспомнили пароль? <Link className={`${styles.login_link} text text_type_main-small`} to="/sign-in">Войти</Link></p>
    </section>
  )
}