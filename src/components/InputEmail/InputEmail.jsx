import { ErrorMessage, Field } from 'formik';
import styles from './InputEmail.module.css';
import { MdEmail } from 'react-icons/md';

const InputEmail = () => {
  return (
    <div>
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <div className="inputLogWrapper">
        <MdEmail size={24} color="#081222" />
        <Field
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="inputLog"
        />
      </div>
      <ErrorMessage name="email" component="div" className={styles.error} />
    </div>
  );
};

export default InputEmail;
