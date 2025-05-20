import css from './LogoutModal.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/operations';
import { toast } from 'react-toastify';

import CancelBtn from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import Logo from '../Logo/Logo';
import LogOutButton from '../LogOutButton/LogOutButton';

const LogoutModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Failed to log out. Please try again.');
    } finally {
      localStorage.clear();
      dispatch({ type: 'auth/reset' });
      closeModal();
      navigate('/login');
    }
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <CloseButton onClick={closeModal} />

        <div className={css.container}>
          <Logo className={css.logo} />
  
          <p className={css.message}>Are you sure you want to log out?</p>
  
          <LogOutButton onClick={handleLogout} />
          <CancelBtn onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
