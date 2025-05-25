import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputConfirmPassword from '../InputConfirmPassword/InputConfirmPassword';
import InputEmail from '../InputEmail/InputEmail';
import InputName from '../InputName/InputName';
import InputPassword from '../InputPassword/InputPassword';
import LoginLink from '../LoginLink/LoginLink';
import RegisterButton from '../RegisterButton/RegisterButton';
import css from './RegistrationForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectError } from '../../redux/transactions/selectors';
import { register } from '../../redux/auth/operations';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

// Валідація з урахуванням backend-схеми
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);

  const handleSubmit = values => {
    const { name, email, password } = values;
    console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    // navigate('/');
  };
  useEffect(() => {
    if (error) {
      if (error.includes('Invalid') || error.includes('400')) {
        toast.error('Incorrect email or password');
      } else if (error.includes('500')) {
        toast.error('Unable to connect to the server');
      } else {
        toast.error(error);
      }
    }
  }, [error]);

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
