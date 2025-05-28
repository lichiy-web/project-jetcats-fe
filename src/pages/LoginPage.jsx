import { useMediaQuery } from 'react-responsive';
import AuthCard from '../components/AuthCard/AuthCard';
import DudeHi from '../components/DudeHi/DudeHi';
import styles from '../components/DudeHi/DudeHi.module.css'

const LoginPage = () => {
 const isTablet = useMediaQuery({
 query: '(min-width: 768px) and (max-width: 1279px)'})
const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
// const isMobile = useMediaQuery({query: '(max-width: 767px)'});


  return (
    <div className="wrapperLog">
      <div className="wrapperForm">
        <AuthCard formType="login" />
      </div>
      {isTablet && <DudeHi isTablet={isTablet} className={styles.dudeLog}/>}
      {isDesktop && <DudeHi className={styles.dudeLog}/>}

      {/* {!isMobile && <DudeHi isLoginPage={true} />} */}
    </div>
  );
};

export default LoginPage;

