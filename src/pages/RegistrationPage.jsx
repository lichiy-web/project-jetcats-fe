import { useMediaQuery } from 'react-responsive';
import AuthCard from '../components/AuthCard/AuthCard';
import DudeOk from '../components/DudeOk/DudeOk';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className={css.wrapper}>
      <AuthCard formType="register" />
      {!isMobile && <DudeOk />}
    </div>
  );
};

export default RegistrationPage;
