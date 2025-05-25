import { useDispatch, useSelector } from 'react-redux';
import { setIsIncome } from '../../redux/summary/summaryStatisticSlice';
import { summaryStatisticSelector } from '../../redux/summary/summaryStatisticSelector';

import s from './ToggleDesc.module.css';

const ToggleDesc = () => {
  const dispatch = useDispatch();
  const { isIncome } = useSelector(summaryStatisticSelector);

  const handleToggle = () => {
    const isIncomeToggled = isIncome === 'income' ? 'expense' : 'income';
    dispatch(setIsIncome(isIncomeToggled));
  };

  return (
    <div className={s.toggleWrapper}>
      <div className={s.toggleContainer}>
        <div className={s.labelContainer}>
          <span className={s.labelTitle}>Income</span>
        </div>

        <label className={s.switchBlock}>
          <input
            type="checkbox"
            checked={isIncome === 'expense'}
            onChange={handleToggle}
            className={s.switchInput}
          />
          <div className={s.switchSlider}>
            <div className={s.switchCircle}>
              {isIncome === 'income' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <circle cx="22" cy="22" r="22" fill="#DFAD3F" />
                  <path d="M22 12V32" stroke="#FCFCFC" strokeWidth="2" />
                  <path d="M12 22L32 22" stroke="#FCFCFC" strokeWidth="2" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <circle cx="22" cy="22" r="22" fill="#B30202" />
                  <path d="M12 22L32 22" stroke="#FCFCFC" strokeWidth="2" />
                </svg>
              )}
            </div>
          </div>
        </label>

        <div className={s.labelContainer}>
          <span className={s.labelTitle}>Expense</span>
        </div>
      </div>
    </div>
  );
};

export default ToggleDesc;
