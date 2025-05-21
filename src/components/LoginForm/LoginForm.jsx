import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import LoginButton from '../LoginButton/LoginButton';
import RegisterLink from '../RegisterLink/RegisterLink';
import css from './LoginForm.module.css'
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';


const LoginForm = () => {

  const dispatch = useDispatch();
  // const isLoading = useSelector(state => state.auth.isLoading);
  // const error = useSelector(state => state.auth.error);

    const handleSubmit = (values) => {
    dispatch(logIn(values));
    console.log("відправка данних", values);
  };

  const loginFormSchema = Yup.object({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(64, "Too Long!")
    .required("Required"),

  password: Yup.string()
    .min(8, "Too Short!")
    .max(64, "Too Long!")
    .required("Required"),
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
      <InputEmail/>
      <InputPassword />
      </div>
      <div className={css.btnFields}>
      <LoginButton disabled={!isValid} />
      <RegisterLink />
      </div>
    </Form>)}
    </Formik>
  );
};

export default LoginForm;
