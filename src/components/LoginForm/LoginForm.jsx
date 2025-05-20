import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import LoginButton from '../LoginButton/LoginButton';
import RegisterLink from '../RegisterLink/RegisterLink';
import css from './LoginForm.module.css'

const LoginForm = () => {
  return (
    <div className={css.form}>
      <div className={css.inputFields}>
      <InputEmail/>
      <InputPassword />
      </div>
      <div className={css.btnFields}>
      <LoginButton />
      <RegisterLink />
      </div>
    </div>
  );
};

export default LoginForm;
