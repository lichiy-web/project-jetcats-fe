import { useSelector } from 'react-redux';
import { selectIsModalLogOut } from '../../redux/modals/selectors';
import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import Logo from '../Logo/Logo';
import LogOutButton from '../LogOutButton/LogOutButton';

const LogoutModal = () => {
  const isModalLogOut = useSelector(selectIsModalLogOut);
  return (
    isModalLogOut && (
      <div>
        <h1>LogoutModal</h1>
        <CloseButton />
        <Logo />
        <LogOutButton />
        <CancelButton />
      </div>
    )
  );
};

export default LogoutModal;
