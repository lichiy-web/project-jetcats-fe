import { ErrorMessage, Field } from 'formik';
import css from './InputEmail.module.css'
import { MdEmail } from "react-icons/md";

const InputEmail = () => {
  return (
    <div>
    <label htmlFor="email" className={css.label}>Email</label>
  <div className={css.inputWrapper}>
    <MdEmail size={24} color="#081222" />
    <Field type="email" name="email" id="email" placeholder="Email" className={css.input} />
    </div>
    <ErrorMessage name="email" component="div" className={css.error} />
    </div>
  )
};

export default InputEmail;
