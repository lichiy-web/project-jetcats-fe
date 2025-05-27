import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputConfirmPassword from '../InputConfirmPassword/InputConfirmPassword';
import InputEmail from '../InputEmail/InputEmail';
import InputName from '../InputName/InputName';
import InputPassword from '../InputPassword/InputPassword';
import LoginLink from '../LoginLink/LoginLink';
import RegisterButton from '../RegisterButton/RegisterButton';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

// Валідація з урахуванням backend-схеми
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
    .required('Email is required'),
  confirmPassword: Yup.string()
    .test({
      name: 'comparePasswords',
      message: 'Passwords do not match',
      test: (value, context) => {
        console.log({ value, context });
        return value === context.parent.password;
      },
    })
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

  const handleSubmit = async values => {
    const { name, email, password } = values;

    try {
      await dispatch(register({ name, email, password })).unwrap();
      navigate('/');
    } catch (error) {
      console.log(error);

      if (error.includes('400')) {
        toast.error('Not valid email');
      } else if (error.includes('Email in use') || error.includes('409')) {
        toast.error('Email already in use');
      } else if (error.includes('500')) {
        toast.error('Unable to connect to the server');
      } else {
        toast.error(error);
      }
    }
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
