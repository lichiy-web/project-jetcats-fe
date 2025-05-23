import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/operations.js';
import { selectcIsModalLogOut } from '../../redux/modals/selectors.js';
import { toggleModal } from '../../redux/modals/slice.js';
import { toast } from 'react-toastify';
import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import LogOutButton from '../LogOutButton/LogOutButton';
import logo from '../../assets/logo-modal.svg';
import css from './LogoutModal.module.css';

Modal.setAppElement('#root');

const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isModalLogOut = useSelector(selectcIsModalLogOut);

  const handleClose = () => {
    dispatch(toggleModal('LogOut'));
  };

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate('/login');
    } catch (error) {
      toast.error('Logout failed:', error);
    } finally {
      handleClose();
    }
  };

  return (
    <Modal
      isOpen={isModalLogOut}
      onRequestClose={handleClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <CloseButton onClick={handleClose} />

      <div className={css.container}>
        <img src={logo} alt="Spendy logo" className={css.logo} />

        <p className={css.message}>Are you sure you want to log out?</p>

        <LogOutButton onClick={handleLogout} />
        <CancelButton onClick={handleClose} />
      </div>
    </Modal>
  );
};

export default LogoutModal;
