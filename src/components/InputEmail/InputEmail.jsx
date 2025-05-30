import { ErrorMessage, Field, useField } from 'formik';
import { MdEmail } from 'react-icons/md';
import clsx from 'clsx';

const InputEmail = () => {
  const [, meta] = useField('email');
  const isError = meta.touched && meta.error;

  return (
    <div className="fieldLogWrapper">
      <label htmlFor="email" className="labelLog">
        Email
      </label>
      <div
        className={clsx('inputLogWrapper', isError && 'inputLogWrapperError')}
      >
        <MdEmail size={24} color={isError ? '#b20202' : '#081222'} />
        <Field
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          className={clsx('inputLog', isError && 'inputLogError')}
          autoComplete="current-email"
        />
      </div>
      <ErrorMessage name="email" component="div" className="error" />
    </div>
  );
};

export default InputEmail;