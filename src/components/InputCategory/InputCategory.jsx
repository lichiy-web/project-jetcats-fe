import { ErrorMessage, useFormikContext } from 'formik';
import { useState } from 'react';
import s from './InputCategory.module.css';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/categories/selectors';

const InputCategory = () => {
  const { values, setFieldValue } = useFormikContext();
  const [isOpen, setIsOpen] = useState(false);
  const categories = useSelector(selectCategories);

  if (values.type !== 'expense') return null;

  if (!Array.isArray(categories)) return null;

  const categoryExpense = categories.filter(
    category => category.type === 'expense'
  );

  return (
    <div className={s.wrapper}>
      <div className={s.selectWrapper}>
        <select
          name="category"
          value={values.category || ''}
          onChange={e => setFieldValue('category', e.target.value)}
          onFocus={() => setIsOpen(true)}
          className={s.select}
        >
          <option value="" disabled>
            Category
          </option>
          {categoryExpense.map(category => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <span className={s.icon}>
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3525 7.64697L11.9996 13.9999L5.64666 7.64697"
                stroke="#081222"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64648 14L11.9994 7.64706L18.3524 14"
                stroke="#081222"
              />
            </svg>
          )}
        </span>
      </div>
      <ErrorMessage name="category" component="div" className={s.error} />
    </div>
  );
};

export default InputCategory;
