import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import LoginButton from '../LoginButton/LoginButton';
import RegisterLink from '../RegisterLink/RegisterLink';
import css from './LoginForm.module.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { selectError } from '../../redux/transactions/selectors';
// import Loader from '../Loader/Loader';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleSubmit = values => {
    dispatch(logIn(values));
    // console.log('відправка данних', values);
    navigate('/');
  };

  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/');
  //   }
  // }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (error) {
      if (error.includes('401')) {
        toast.error('This user is not registered');
      } else if (error.includes('Invalid') || error.includes('400')) {
        toast.error('Incorrect email or password');
      } else if (error.includes('500')) {
        toast.error('Unable to connect to the server');
      } else {
        toast.error(error);
      }
    }
  }, [error]);

  const loginFormSchema = Yup.object({
    email: Yup.string()
      .min(3, 'Too Short!')
      .max(64, 'Too Long!')
      .required('Required'),

    password: Yup.string()
      .min(8, 'Too Short!')
      .max(64, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className={css.form}>
          <div className={css.inputFields}>
            <InputEmail />
            <InputPassword />
          </div>
          <div className={css.btnFields}>
            <LoginButton disabled={!isValid} />
            <RegisterLink />
          </div>
          {/* {isLoading && <Loader />} */}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

// || isLoading
