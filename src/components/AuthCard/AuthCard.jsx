import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const AuthCard = formType => {
  return (
    <div>
      <Logo />
      {formType === 'register' ? <RegistrationForm /> : <LoginForm />}
    </div>
  );
};

export default AuthCard;
