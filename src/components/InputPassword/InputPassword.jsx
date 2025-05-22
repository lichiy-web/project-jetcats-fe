import css from './InputPassword.module.css'
import { RiLockPasswordFill } from "react-icons/ri";
import { ErrorMessage, Field } from 'formik';

const InputPassword = () => {
  return (
  <div>
    <label className={css.label} htmlFor="password">Password</label>
  <div className={css.inputWrapper}>
      <RiLockPasswordFill size={24} color="#081222" />
      <Field type="password" name="password" id="password" placeholder="Password" className={css.input}/>
      </div>
      <ErrorMessage name="password" component="div" className={css.error} />
      </div>);
};

export default InputPassword;
