import { Field } from 'formik';
import { RiLockPasswordFill } from 'react-icons/ri';

const InputConfirmPassword = () => {
  return (
    <div className="inputLogWrapper">
      <RiLockPasswordFill size={24} color="#081222" />
      <Field
        type="password"
        placeholder="Confirm Password"
        className="inputLog"
        name="confirmPassword"
        autoComplete="new-password"
      />
    </div>
  );
};

export default InputConfirmPassword;
