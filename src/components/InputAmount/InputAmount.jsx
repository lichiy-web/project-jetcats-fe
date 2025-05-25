import { ErrorMessage, Field } from 'formik';
import s from './InputAmount.module.css';

const InputAmount = () => {
  return (
    <div className={s.wrapper}>
      <Field
        name="sum"
        type="number"
        placeholder="0.00"
        className={s.inputAmount}
      />
      <ErrorMessage name="sum" component="div" className={s.error} />
    </div>
  );
};

export default InputAmount;
