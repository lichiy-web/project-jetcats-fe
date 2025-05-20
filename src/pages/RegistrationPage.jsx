import AuthCard from '../components/AuthCard/AuthCard';
import DudeHi from '../components/DudeHi/DudeHi';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.wrapper}>
      <AuthCard formType="register" />
      <DudeHi />
    </div>
  );
};

export default RegistrationPage;
