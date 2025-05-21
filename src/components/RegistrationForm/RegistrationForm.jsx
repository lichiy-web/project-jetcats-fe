import InputConfirmPassword from '../InputConfirmPassword/InputConfirmPassword';
import InputEmail from '../InputEmail/InputEmail';
import InputName from '../InputName/InputName';
import InputPassword from '../InputPassword/InputPassword';
import LoginLink from '../LoginLink/LoginLink';
import RegisterButton from '../RegisterButton/RegisterButton';

const RegistrationForm = () => {
  console.log('Entered RegistrationForm!');

  return (
    <div>
      <InputName />
      <InputEmail />
      <InputPassword />
      <InputConfirmPassword />
      <RegisterButton />
      <LoginLink />
    </div>
  );
};

export default RegistrationForm;
