import { useField, Field, ErrorMessage } from 'formik';
import { RiLockPasswordFill } from 'react-icons/ri';
import clsx from 'clsx';

const InputPassword = () => {
  const [, meta] = useField('password');
  const isError = meta.touched && meta.error;

  return (
    <div className="fieldLogWrapper">
      <label className="labelLog" htmlFor="password">
        Password
      </label>
      <div
        className={clsx('inputLogWrapper', isError && 'inputLogWrapperError')}
      >
        <RiLockPasswordFill size={24} color={isError ? '#b20202' : '#081222'} />
        <Field
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={clsx('inputLog', isError && 'inputLogError')}
        />
      </div>
      <ErrorMessage name="password" component="div" className="error" />
    </div>
  );
};

export default InputPassword;
