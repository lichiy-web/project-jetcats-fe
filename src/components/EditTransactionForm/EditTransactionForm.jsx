import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import InputAmount from '../InputAmount/InputAmount';
import InputComment from '../InputComment/InputComment';
import SaveButton from '../SaveButton/SaveButton';
import InputCategory from '../InputCategory/InputCategory';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import s from './EditTransactionForm.module.css';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categories/operations';
import { patchTransaction } from '../../redux/transactions/operations';
import ToggleDescTransaction from '../ToggleDescTransaction/ToggleDescTransaction';

const EditTransactionForm = ({ onClose }) => {
  const validateSchema = Yup.object({
    sum: Yup.number().positive('Must be positive').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().max(192),
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
        <h2 className={s.title}>Edit transaction</h2>

        <Formik
          initialValues={{
            type: 'expense',
            sum: '',
            date: new Date(),
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
              type: values.type,
              category: values.category,
              sum: Number(values.sum),
              date: formatDateToYYYYMMDD(values.date),
              comment: values.comment,
            };

            if (values.type === 'income') {
              payload.category = '6825eae52bcfe457b4ce5b14';
            }

            dispatch(patchTransaction(payload))
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
              <div className={s.WrapperToggle}>
                <ToggleDescTransaction
                  values={values}
                  setFieldValue={setFieldValue}
                />
              </div>

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

export default EditTransactionForm;
