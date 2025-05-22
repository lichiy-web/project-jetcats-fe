import AuthCard from '../components/AuthCard/AuthCard';
import DudeHi from '../components/DudeHi/DudeHi';
import css from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={css.page}>
      <div className={css.content}>
      <AuthCard formType="login"/>
      <DudeHi />
      </div>
    </div>
  );
};

export default LoginPage;
