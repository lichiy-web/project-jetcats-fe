import { ErrorMessage, Field, useField } from 'formik';
import { ImUser } from 'react-icons/im';
import clsx from 'clsx';

const InputName = () => {
  const [, meta] = useField('name');
  const isError = meta.touched && meta.error;

  return (
    <div className="fieldLogWrapper">
      <label htmlFor="name" className="labelLog">
        Email
      </label>
      <div
        className={clsx('inputLogWrapper', isError && 'inputLogWrapperError')}
      >
        <ImUser size={24} color={isError ? '#b20202' : '#081222'} />
        <Field
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className={clsx('inputLog', isError && 'inputLogError')}
          autoComplete="new-name"
        />
      </div>
      <ErrorMessage name="name" component="div" className="error" />
    </div>
  );
};

export default InputName;
