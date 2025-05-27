import { useMediaQuery } from 'react-responsive';
import AuthCard from '../components/AuthCard/AuthCard';
import DudeHi from '../components/DudeHi/DudeHi';
import styles from '../components/DudeHi/DudeHi.module.css'

const LoginPage = () => {
 const isTablet = useMediaQuery({
    query: '(min-width: 767px) and (max-width: 1279px)',
  })
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div className="wrapperLog">
      <div className="wrapperForm">
      <AuthCard formType="login" />
      </div>
      {(isTablet || isDesktop) && <DudeHi className={styles.dudeLog} />}
    </div>
  );
};

export default LoginPage;

