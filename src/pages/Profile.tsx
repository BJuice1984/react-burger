import ProfileNavigation from "../components/ProfileNavigation/ProfileNavigation";
import { EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";
import styles from "../components/Profile/profile.module.css";
import { useDispatch, useSelector } from "../hooks/hooks";
import { postProfileEmail, postProfileName } from "../services/selectors/profile";
import { getUser } from "../services/actions/profile";

export default function Profile() {
  const profileEmail = useSelector(postProfileEmail);
  const profileName = useSelector(postProfileName);

  const dispatch = useDispatch();

  const {values, handleChange, setValues} = useForm({});

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    setValues({
      name: profileName || '',
      email: profileEmail || '',
      password: '',
    })
  }, [profileEmail, profileName, setValues])

  return (
    <section className={ styles.profile }>
      <div className={ styles.profile_container }>
        <ProfileNavigation />
        <div className={ styles.container }>
          <EmailInput
            onChange={handleChange}
            value={values.name || ''}
            name={'name'}
            placeholder="Имя"
            extraClass="mb-6"
            isIcon={true}
            noValidate={true}
          />
          <EmailInput
            onChange={handleChange}
            value={values.email || ''}
            name={'email'}
            placeholder="Логин"
            isIcon={true}
            extraClass="mb-6"
          />
          <PasswordInput
            onChange={handleChange}
            value={values.password || ''}
            name={'password'}
            icon="EditIcon"
          />
        </div>
        <p className={`${styles.description} text text_type_main-small pt-4`}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
    </section>
  )
}