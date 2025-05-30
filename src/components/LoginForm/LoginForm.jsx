import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import LoginButton from '../LoginButton/LoginButton';
import RegisterLink from '../RegisterLink/RegisterLink';
import css from './LoginForm.module.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch} from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import toast from 'react-hot-toast';
// import { selectError } from '../../redux/transactions/selectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const error = useSelector(selectError);

  const handleSubmit = values => {
    dispatch(logIn(values));
    // console.log('відправка данних', values);
    navigate('/');
  };

  // useEffect(() => {
  //   if (error) {
  //     toast.dismiss();
  //     console.log('Error caught in component:', error);
  //   if (error?.toLowerCase().includes('unauthorized')) {
  //     toast.error('User is not registered')
  //   } else if (error?.includes('email') || error?.includes('password')) {
  //     toast.error('Wrong email or password');
  //   } else 
  //   {
  //     toast.error(error);
  //   }
  //   }
  // }, [error]);

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