import clsx from 'clsx';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import css from './AuthCard.module.css';
import { useMediaQuery } from 'react-responsive';
import DudeHi from '../../components/DudeHi/DudeHi';

const AuthCard = ({ formType }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className={clsx(css.wrapper, formType === 'login' && css.login)}>
      <Logo />
      {formType === 'register' ? <RegistrationForm /> : <LoginForm />}
      {isMobile && formType === 'login' && <DudeHi />} 
    </div>
  );
};

export default AuthCard;

// import clsx from 'clsx';
// import LoginForm from '../LoginForm/LoginForm';
// import Logo from '../Logo/Logo';
// import RegistrationForm from '../RegistrationForm/RegistrationForm';
// import css from './AuthCard.module.css';
// import { useMediaQuery } from 'react-responsive';
// import DudeHi from '../../components/DudeHi/DudeHi';

// const AuthCard = ({ formType }) => {
//   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

//   return (
//     <div className={css.wrapper}>
//       <Logo isAuth={true} />
//       {formType === 'register' ? <RegistrationForm /> : <LoginForm />}
//       {(isMobile) && formType === 'login' && <DudeHi isMobile={isMobile}/>} 
//     </div>
//   );
// };

// export default AuthCard;