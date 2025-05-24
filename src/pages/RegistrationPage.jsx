import { useMediaQuery } from 'react-responsive';
import AuthCard from '../components/AuthCard/AuthCard';
import DudeOk from '../components/DudeOk/DudeOk';

const RegistrationPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className="wrapper">
      <AuthCard formType="register" />
      {!isMobile && <DudeOk />}
    </div>
  );
};

export default RegistrationPage;
