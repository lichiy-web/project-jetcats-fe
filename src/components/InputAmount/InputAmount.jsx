import { ErrorMessage, useField } from 'formik';
import s from './InputAmount.module.css';
import clsx from 'clsx';

const InputAmount = () => {
  const [field, meta] = useField('sum');
  const isError = meta.touched && meta.error;

  return (
    <div className={s.wrapper}>
      <input
        {...field}
        type="number"
        placeholder="0.00"
        className={clsx(s.inputAmount, isError && s.inputAmountError)}
      />
      <ErrorMessage name="sum" component="div" className={s.error} />
    </div>
  );
};

export default InputAmount;
