import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import { EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./profile.module.css";

export default function Profile() {
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  }

  return (
    <section className={ styles.profile }>
      <div className={ styles.profile_container }>
        <ProfileNavigation />
        <div className={ styles.container }>
          <EmailInput
            onChange={onChange}
            value={value}
            name={'name'}
            placeholder="Имя"
            isIcon={true}
            extraClass="mb-6"
          />
          <EmailInput
            onChange={onChange}
            value={value}
            name={'text'}
            placeholder="Логин"
            isIcon={true}
            extraClass="mb-6"
          />
          <PasswordInput
            onChange={onChange}
            value={value}
            name={'password'}
            icon="EditIcon"
          />
        </div>
        <p className={`${styles.description} text text_type_main-small pt-4`}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
    </section>
  )
}