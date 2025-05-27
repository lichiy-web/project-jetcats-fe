import { Form, Formik } from 'formik';
import StatisticsTable from '../StatisticsTable/StatisticsTable';
import { useEffect, useState } from 'react';
import css from './StatisticsDashboard.module.css';
import Select from 'react-select';
import { SlArrowDown } from 'react-icons/sl';
import { components } from 'react-select';
import { useDispatch } from 'react-redux';
import { setMonth, setYear } from '../../redux/summary/summaryStatisticSlice';
const StatisticsDashboard = ({ incomeExpenseData, totalSum }) => {
  const initialValues = {
    month: 'may',
    year: '2025',
  };

  const monthOptions = [
    { value: 'january', label: 'January' },
    { value: 'february', label: 'February' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'june', label: 'June' },
    { value: 'july', label: 'July' },
    { value: 'august', label: 'August' },
    { value: 'september', label: 'September' },
    { value: 'october', label: 'October' },
    { value: 'november', label: 'November' },
    { value: 'december', label: 'December' },
  ];

  const currentYear = new Date().getFullYear();

  const yearOptions = Array.from({ length: 5 }, (_, i) => {
    const year = currentYear - (4 - i);
    return { value: year.toString(), label: year.toString() };
  });
  const today = new Date();
  const currentMonthIndex = today.getMonth();

  const DropdownIndicator = props => {
    const { menuIsOpen } = props.selectProps;
    return (
      <components.DropdownIndicator {...props}>
        <SlArrowDown
          className={`${css.arrow} ${menuIsOpen ? css.arrowOpen : ''}`}
          size={16}
          color="currentColor"
        />
      </components.DropdownIndicator>
    );
  };

  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    const monthValue = formValues.month;
    const yearValue = formValues.year;
    console.log('Month:', monthValue);
    console.log('Year:', yearValue);
  }, [formValues]);

  const dispatch = useDispatch();

  return (
    <div className={css.statisticsInputsWrapper}>
      <Formik initialValues={initialValues}>
        {() => {
          return (
            <Form className={css.form}>
              <Select
                className="my-select"
                classNamePrefix="my-select"
                components={{
                  DropdownIndicator,
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: base => ({
                    ...base,
                    background:
                      'linear-gradient(180deg, #355359 0%, #3b5d63 100%)',
                    borderColor: '#ccc',
                    minHeight: '40px',
                    color: '#f23a3a',
                    cursor: 'pointer',
                    borderRadius: '8px',
                  }),

                  menu: base => ({
                    ...base,
                    background:
                      'linear-gradient(180deg, #294045 0%, #1e2f33 100%)',
                    cursor: 'pointer',
                    color: '#fcfcfc',
                    borderRadius: '8px',
                  }),
                  menuList: base => ({
                    ...base,
                    maxHeight: '157px',
                    overflowY: 'auto',
                    overflowX: 'auto',
                  }),
                  singleValue: base => ({
                    ...base,
                    color: '#ffffff',
                  }),
                  option: (base, state) => ({
                    ...base,
                    background: state.isFocused
                      ? 'linear-gradient(180deg, #355359 0%, #3b5d63 100%)'
                      : 'transparent',
                    color: state.isDisabled
                      ? 'rgba(255,255,255,0.4)'
                      : '#fcfcfc',
                    cursor: state.isDisabled ? 'not-allowed' : 'pointer',
                  }),
                }}
                options={
                  formValues.year === '2025'
                    ? monthOptions.slice(0, currentMonthIndex + 1)
                    : monthOptions
                }
                value={monthOptions.find(opt => opt.value === formValues.month)}
                isOptionDisabled={(_, idx) =>
                  formValues.year === '2025' && idx > currentMonthIndex
                }
                onChange={option => {
                  const newMonth = option.value;
                  const newNumMonth =
                    monthOptions.findIndex(month => month.value === newMonth) +
                    1;
                  console.log({ newMonth, newNumMonth });
                  dispatch(setMonth(newNumMonth));

                  const selectedMonthIndex = monthOptions.findIndex(
                    m => m.value === newMonth
                  );
                  if (
                    formValues.year === '2025' &&
                    selectedMonthIndex > currentMonthIndex
                  ) {
                    return;
                  }

                  setFormValues(prev => ({ ...prev, month: newMonth }));
                }}
              />

              <Select
                classNamePrefix="my-select"
                components={{
                  DropdownIndicator,
                  IndicatorSeparator: () => null,
                }}
                styles={{
                  control: base => ({
                    ...base,
                    background:
                      'linear-gradient(180deg, #355359 0%, #3b5d63 100%)',
                    borderColor: '#ccc',
                    minHeight: '40px',
                    color: '#b20202',
                    cursor: 'pointer',
                    borderRadius: '8px',
                  }),
                  singleValue: base => ({
                    ...base,
                    color: '#ffffff',
                  }),
                  menu: base => ({
                    ...base,
                    width: '187px',
                    height: '157px',
                    borderRadius: '8px',
                    background:
                      'linear-gradient(180deg, #294045 0%, #1e2f33 100%)',
                  }),
                  menuList: base => ({
                    ...base,
                    maxHeight: '157px',
                    overflowY: 'auto',
                    overflowX: 'auto',
                  }),
                  option: (base, state) => ({
                    ...base,
                    background: state.isFocused
                      ? 'linear-gradient(180deg, #355359 0%, #3b5d63 100%)'
                      : 'transparent',
                    color: '#fcfcfc',
                    cursor: 'pointer',
                  }),
                }}
                options={yearOptions}
                value={yearOptions.find(opt => opt.value === formValues.year)}
                onChange={option => {
                  const newYear = option.value;
                  dispatch(setYear(newYear));

                  setFormValues(prev => {
                    const selectedMonthIndex = monthOptions.findIndex(
                      m => m.value === prev.month
                    );

                    const shouldResetMonth =
                      newYear === '2025' &&
                      selectedMonthIndex > currentMonthIndex;

                    return {
                      year: newYear,
                      month: shouldResetMonth
                        ? monthOptions[currentMonthIndex].value
                        : prev.month,
                    };
                  });
                }}
              />
            </Form>
          );
        }}
      </Formik>
      <StatisticsTable
        incomeExpenseData={incomeExpenseData}
        totalSum={totalSum}
      />
    </div>
  );
};

export default StatisticsDashboard;
