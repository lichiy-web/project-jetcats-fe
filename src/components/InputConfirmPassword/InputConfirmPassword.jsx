import { ErrorMessage, Field, useField } from 'formik';
import { RiLockPasswordFill } from 'react-icons/ri';
import clsx from 'clsx';

const InputConfirmPassword = () => {
  const [, meta] = useField('confirmPassword');
  const isError = meta.touched && meta.error;

  return (
    <div className="fieldLogWrapper">
      <label htmlFor="confirmPassword" className="labelLog">
        Email
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
          autoComplete="new-password"
        />
      </div>
      <ErrorMessage name="confirmPassword" component="div" className="error" />
    </div>
  );
};

export default InputConfirmPassword;
