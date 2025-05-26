import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputConfirmPassword from '../InputConfirmPassword/InputConfirmPassword';
import InputEmail from '../InputEmail/InputEmail';
import InputName from '../InputName/InputName';
import InputPassword from '../InputPassword/InputPassword';
import LoginLink from '../LoginLink/LoginLink';
import RegisterButton from '../RegisterButton/RegisterButton';
import css from './RegistrationForm.module.css';

// Валідація з урахуванням backend-схеми
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegistrationForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // Тут буде запит на бекенд, поки просто лог
    console.log('Register:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputFields}>
          <InputName />
          <InputEmail />
          <InputPassword />
          <InputConfirmPassword />
        </div>
        <div className={css.btnFields}>
          <RegisterButton />
          <LoginLink />
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;