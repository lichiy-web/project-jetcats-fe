import { useFormikContext } from 'formik';
import s from './ToggleDescTransaction.module.css';

const ToggleDesc = () => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <div className={s.toggleGroup}>
      <span className={s.span}>Income</span>
      <label className={s.toggle}>
        <input
          type="checkbox"
          className={s.toggleInput}
          checked={values.type === 'expense'}
          onChange={() =>
            setFieldValue(
              'type',
              values.type === 'income' ? 'expense' : 'income'
            )
          }
        />
        <span className={s.toggleSlider}></span>
      </label>
      <span className={s.span}>Expense</span>
    </div>
  );
};

export default ToggleDesc;
