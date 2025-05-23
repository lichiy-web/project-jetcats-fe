import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import InputAmount from '../InputAmount/InputAmount';
import InputComment from '../InputComment/InputComment';
import ToggleDesc from '../ToggleDesc/ToggleDesc';
import SaveButton from '../SaveButton/SaveButton';
import InputCategory from '../InputCategory/InputCategory';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import s from './AddTransactionForm.module.css';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categories/operations';
import { addTransaction } from '../../redux/transactions/operations';

const AddTransactionForm = ({ onClose }) => {
  const validateSchema = Yup.object({
    amount: Yup.number().positive('Must be positive').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().max(20),
    category: Yup.string().when('type', {
      is: 'expense',
      then: schema => schema.required('Category is required'),
      otherwise: schema => schema.notRequired(),
    }),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={s.backdrop}>
      <div className={s.modal} onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose} />
        <h2 className={s.title}>Add transaction</h2>

        <Formik
          initialValues={{
            type: 'expense',
            amount: '',
            date: '',
            comment: '',
            category: '',
          }}
          validationSchema={validateSchema}
          onSubmit={values => {
            const formatDateToYYYYMMDD = date => {
              const d = new Date(date);
              const year = d.getFullYear();
              const month = String(d.getMonth() + 1).padStart(2, '0');
              const day = String(d.getDate()).padStart(2, '0');
              return `${year}-${month}-${day}`;
            };

            const payload = {
              ...values,
              date: formatDateToYYYYMMDD(values.date),
            };

            if (values.type === 'income') {
              payload.category = {
                name: 'Incomes',
                type: 'income',
              };
            }

            dispatch(addTransaction(payload))
              .unwrap()
              .then(() => {
                onClose();
              })
              .catch(error => {
                error.message;
              });
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className={s.form}>
              <ToggleDesc values={values} setFieldValue={setFieldValue} />

              <div className={s.wrapper}>
                <InputCategory />
                <div className={s.inputWrapper}>
                  <InputAmount />
                  <CustomDatePicker
                    selectedDate={startDate}
                    onChange={date => {
                      setStartDate(date);
                      setFieldValue('date', date);
                    }}
                  />
                </div>

                <InputComment />
              </div>

              <div className={s.btnGroup}>
                <SaveButton />
                <CancelButton onClick={onClose} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddTransactionForm;
