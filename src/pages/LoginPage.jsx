import { useMediaQuery } from 'react-responsive';
import AuthCard from '../components/AuthCard/AuthCard';
import DudeHi from '../components/DudeHi/DudeHi';

const LoginPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className="wrapperLog">
      <AuthCard formType="login" />
      {!isMobile && <DudeHi />}
    </div>
  );
};

export default LoginPage;
