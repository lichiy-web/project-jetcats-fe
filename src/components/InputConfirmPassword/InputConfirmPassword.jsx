import { useField, Field, ErrorMessage } from 'formik';
import { RiLockPasswordFill } from 'react-icons/ri';
import clsx from 'clsx';

const InputConfirmPassword = () => {
  const [field, meta] = useField('confirmPassword');
  const isError = meta.touched && meta.error;

  return (
    <div className="fieldLogWrapper">
      <label className="labelLog" htmlFor="confirmPassword">
        Confirm Password
      </label>
      <div
        className={clsx('inputLogWrapper', isError && 'inputLogWrapperError')}
      >
        <RiLockPasswordFill size={24} color={isError ? '#b20202' : '#081222'} />
        <Field
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          className={clsx('inputLog', isError && 'inputLogError')}
        />
      </div>
      <ErrorMessage name="confirmPassword" component="div" className="error" />
    </div>
  );
};

export default InputConfirmPassword;
