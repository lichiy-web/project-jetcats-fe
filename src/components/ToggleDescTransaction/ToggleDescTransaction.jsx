import { useFormikContext } from 'formik';
import s from './ToggleDescTransaction.module.css';

const ToggleDesc = () => {
  const { values, setFieldValue } = useFormikContext();
  const isExpense = values.type === 'expense';

  return (
    <div className={s.toggleGroup}>
      <span className={s.span}>Income</span>
      <label className={s.toggle}>
        <input
          type="checkbox"
          className={s.toggleInput}
          checked={isExpense}
          onChange={() =>
            setFieldValue('type', isExpense ? 'income' : 'expense')
          }
        />
        <span className={s.toggleSlider}></span>
        <span
          className={`${s.iconWrapper} ${isExpense ? s.expense : s.income}`}
        >
          <svg className={s.icon}>
            <use href={`/sprites.svg#${isExpense ? '-icon' : '+icon'}`} />
          </svg>
        </span>
      </label>
      <span className={s.span}>Expense</span>
    </div>
  );
};

export default ToggleDesc;
