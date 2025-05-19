import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import LoginButton from '../LoginButton/LoginButton';
import RegisterLink from '../RegisterLink/RegisterLink';

const LoginForm = () => {
  return (
    <div>
      <InputEmail />
      <InputPassword />
      <LoginButton />
      <RegisterLink />
    </div>
  );
};

export default LoginForm;
