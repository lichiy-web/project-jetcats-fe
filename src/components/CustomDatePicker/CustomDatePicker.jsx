import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './CustomDatePicker.module.css';
import { ErrorMessage } from 'formik';

const CustomDatePicker = ({ selectedDate, onChange }) => {
  return (
    <div className={s.datepickerWrapper}>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="dd.MM.yyyy"
        placeholderText="Select date"
        className={s.datepickerInput}
        showPopperArrow={false}
      />
      <div className={s.iconWrapper}>
        <svg width="22px" height="22px">
          <use href="/sprites.svg#date-range-icon"></use>
        </svg>
      </div>
      <ErrorMessage name="amount" component="div" className="error" />
    </div>
  );
};

export default CustomDatePicker;
