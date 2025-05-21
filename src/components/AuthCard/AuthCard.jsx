import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import css from './AuthCard.module.css';

const AuthCard = ({ formType }) => {
  // console.log({ formType });
  return (
    <div className={css.wrapper}>
      <Logo />
      {formType === 'register' ? <RegistrationForm /> : <LoginForm />}
    </div>
  );
};

export default AuthCard;
