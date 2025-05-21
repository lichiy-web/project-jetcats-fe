import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import ToggleDesc from '../ToggleDesc/ToggleDesc';
// import InputAmount from '../InputAmount/InputAmount';
// import InputComment from '../InputComment/InputComment';
// import InputDate from '../InputDate/InputDate';
// import ToggleDesc from '../ToggleDesc/ToggleDesc';
import s from './AddTransactionForm.module.css';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const AddTransactionForm = () => {
  const validateSchema = Yup.object({
    amount: Yup.number().positive('Must be positive').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().max(20),
  });

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(true);
  if (!isModalOpen) return null;
  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal} onClick={e => e.stopPropagation()}>
        <CloseButton onClick={() => setIsModalOpen(false)} />
        <h2 className={s.title}>Add transaction</h2>

        <Formik
          initialValues={{
            type: 'expense',
            amount: '',
            date: '',
            comment: '',
          }}
          validationSchema={validateSchema}
          onSubmit={values => {
            console.log('Submitted values:', values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className={s.form}>
              <ToggleDesc values={values} setFieldValue={setFieldValue} />
              <div className={s.inputWrapper}>
                <Field
                  name="amount"
                  type="number"
                  placeholder="0.00"
                  className={`${s.input} ${s.inputGeneral}`}
                />

                <Field
                  name="date"
                  type="date"
                  className={`${s.input} ${s.inputGeneral}`}
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>

              <Field
                name="comment"
                type="text"
                placeholder="Comment"
                className={`${s.input} ${s.inputComment}`}
              />

              <div className={s.btnGroup}>
                <button type="submit" className={s.submitBtn}>
                  Save
                </button>
                <CancelButton />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {/* <CloseButton />
      <h3>ModalAddTransaction</h3>
      <ToggleDesc />
      <InputAmount />
      <InputDate />
      <InputComment />
      <CancelButton /> */}
    </div>
  );
};

export default AddTransactionForm;
