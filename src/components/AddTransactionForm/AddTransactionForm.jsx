// import CancelButton from '../CancelButton/CancelButton';
// import CloseButton from '../CloseButton/CloseButton';
// import InputAmount from '../InputAmount/InputAmount';
// import InputComment from '../InputComment/InputComment';
// import InputDate from '../InputDate/InputDate';
// import ToggleDesc from '../ToggleDesc/ToggleDesc';
import s from './AddTransactionForm.module.css';
import { Formik, Form, Field } from 'formik';

const AddTransactionForm = () => {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <button className={s.closeBtn} onClick={() => console.log('Закрыть')}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L17 17" stroke="#081222" />
            <path d="M1 17L17 0.999999" stroke="#081222" />
          </svg>
        </button>
        <h2 className={s.title}>Add transaction</h2>

        <Formik
          initialValues={{
            type: 'income',
            amount: '',
            date: '',
            comment: '',
          }}
          onSubmit={values => {
            console.log('Submitted values:', values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className={s.form}>
              <div className={s.toggleGroup}>
                <span className={s.span}>Incame</span>
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
                <button
                  type="button"
                  className={s.cancelBtn}
                  onClick={() => console.log('Cancel')}
                >
                  Cancel
                </button>
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
