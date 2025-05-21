import { useDispatch, useSelector } from 'react-redux';
import css from './DevPanel.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { logIn, logOut } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  selectcIsModalAddTransaction,
  selectcIsModalDeleteTransAction,
  selectcIsModalEditTransAction,
  selectcIsModalLogOut,
} from '../../redux/modals/selectors';
import { MODALS, toggleModal } from '../../redux/modals/slice';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';

const IS_DEV_MODE = import.meta.env.DEV;
const JetCatsCreds = {
  email: 'jetcats.goit@gmail.com',
  password: 'Qwerty123_',
};

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const DevPanel = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isModalAddTransaction = useSelector(selectcIsModalAddTransaction);
  // console.log({ isModalAddTransaction });
  const isModalEditTransaction = useSelector(selectcIsModalEditTransAction);
  const isModalDeleteTransaction = useSelector(selectcIsModalDeleteTransAction);
  const isModalLogOut = useSelector(selectcIsModalLogOut);

  const handleAuth = () => {
    isLoggedIn ? dispatch(logOut()) : dispatch(logIn(JetCatsCreds));
  };
  const handleModals = modal => {
    // console.log(modal);
    dispatch(toggleModal(modal));
  };
  return (
    IS_DEV_MODE && (
      <div className={css['dev-panel']}>
        <button type="button" onClick={handleAuth}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/statistics" className={buildLinkClass}>
          Statistics
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={buildLinkClass}>
          Login
        </NavLink>
        <button type="button" onClick={() => handleModals(MODALS.add)}>
          {isModalAddTransaction ? 'Close' : 'Open'} ModalAddTransaction
          <ModalAddTransaction />
        </button>
        <button type="button" onClick={() => handleModals(MODALS.edit)}>
          {isModalEditTransaction ? 'Close' : 'Open'} EditTrans
        </button>
        <button type="button" onClick={() => handleModals(MODALS.delete)}>
          {isModalDeleteTransaction ? 'Close' : 'Open'} DeleteTrans
        </button>
        <button type="button" onClick={() => handleModals(MODALS.logout)}>
          {isModalLogOut ? 'Close' : 'Open'} LogOut
        </button>
      </div>
    )
  );
};
export default DevPanel;
