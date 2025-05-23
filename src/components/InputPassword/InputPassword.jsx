import styles from './InputPassword.module.css';
import { RiLockPasswordFill } from 'react-icons/ri';
import { ErrorMessage, Field } from 'formik';

const InputPassword = () => {
  return (
    <div>
      <label className={styles.label} htmlFor="password">
        Password
      </label>
      <div className={"inputLogWrapper"}>
        <RiLockPasswordFill size={24} color="#081222" />
        <Field
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={"inputLog"}
        />
      </div>
      <ErrorMessage name="password" component="div" className={styles.error} />
    </div>
  );
};

export default InputPassword;
