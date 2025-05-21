import InputConfirmPassword from '../InputConfirmPassword/InputConfirmPassword';
import InputEmail from '../InputEmail/InputEmail';
import InputName from '../InputName/InputName';
import InputPassword from '../InputPassword/InputPassword';
import LoginLink from '../LoginLink/LoginLink';
import RegisterButton from '../RegisterButton/RegisterButton';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  // console.log('Entered RegistrationForm!');

  return (
    <div className={css.form}>
      <div className={css.inputFields}>
        <InputName />
        <InputEmail />
        <InputPassword />
        <InputConfirmPassword />
      </div>
      <div className={css.btnFields}>
        <RegisterButton />
        <LoginLink />
      </div>
    </div>
  );
};

export default RegistrationForm;
