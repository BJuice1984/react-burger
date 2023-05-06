import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import { EmailInput, PasswordInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./profile.module.css";
import { useSelector } from "react-redux";
import { postProfileEmail, postProfileName } from "../../services/selectors/profile";

export default function Profile() {
  const profileEmail = useSelector(postProfileEmail);
  const profileName = useSelector(postProfileName);

  const [value, setValue] = useState({
    name: profileName ? profileName : '',
    email: profileEmail ? profileEmail : '',
    password: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={ styles.profile }>
      <div className={ styles.profile_container }>
        <ProfileNavigation />
        <div className={ styles.container }>
          <Input
            onChange={handleChange}
            value={value.name}
            name={'name'}
            placeholder="Имя"
            extraClass="mb-6"
            icon="EditIcon"
          />
          <EmailInput
            onChange={handleChange}
            value={value.email}
            name={'email'}
            placeholder="Логин"
            isIcon={true}
            extraClass="mb-6"
          />
          <PasswordInput
            onChange={handleChange}
            value={value.password}
            name={'password'}
            icon="EditIcon"
          />
        </div>
        <p className={`${styles.description} text text_type_main-small pt-4`}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
    </section>
  )
}