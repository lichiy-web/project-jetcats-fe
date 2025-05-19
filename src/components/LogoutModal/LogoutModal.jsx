import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import Logo from '../Logo/Logo';
import LogOutButton from '../LogOutButton/LogOutButton';

const LogoutModal = () => {
  return (
    <div>
      <CloseButton />
      <Logo />
      <LogOutButton />
      <CancelButton />
    </div>
  );
};

export default LogoutModal;
