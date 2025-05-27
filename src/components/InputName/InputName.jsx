import { Field, useField } from 'formik';
import { ImUser } from 'react-icons/im';
import css from './InputName.module.css';

const InputName = () => {
  const [field, meta] = useField('name');

  return (
    <div className="inputLogWrapper">
      <ImUser size={24} color="#081222" />
      <Field
        {...field}
        type="text"
        name="name"
        placeholder="Name"
        className="inputLog"
        autoComplete="new-name"
      />
      {meta.touched && meta.error && (
        <div className={css.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default InputName;
