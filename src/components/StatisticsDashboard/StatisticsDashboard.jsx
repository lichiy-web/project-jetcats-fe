import { Field, Form, Formik } from 'formik';
import StatisticsTable from '../StatisticsTable/StatisticsTable';
import { useEffect, useId, useState } from 'react';
import css from './StatisticsDashboard.module.css';
const StatisticsDashboard = ({ incomeExpenseData, totalSum }) => {
  const initialValues = {
    month: 'may',
    year: '2025',
  };

  const [formValues, setFormValues] = useState(initialValues);

  const monthFieldId = useId();
  const yearFieldId = useId();

  useEffect(() => {
    const monthValue = formValues.month;
    const yearValue = formValues.year;
    console.log('Month:', monthValue);
    console.log('Year:', yearValue);
  }, [formValues]);

  return (
    <div>
      <Formik initialValues={initialValues}>
        {({ handleChange, handleBlur }) => {
          return (
            <Form className={css.form}>
              {/* <label htmlFor={monthFieldId}>month</label> */}

              <Field
                className={css.fieldMonth}
                as="select"
                name="month"
                id={monthFieldId}
                onChange={e => {
                  handleChange(e);
                  setFormValues(prev => ({
                    ...prev,
                    month: e.target.value,
                  }));
                }}
                onBlur={handleBlur}
              >
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </Field>
              {/* <label htmlFor={yearFieldId}>month</label> */}
              <Field
                className={css.fieldYear}
                as="select"
                name="year"
                id={yearFieldId}
                onChange={e => {
                  handleChange(e);
                  setFormValues(prev => ({
                    ...prev,
                    year: e.target.value,
                  }));
                }}
                onBlur={handleBlur}
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </Field>
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
