import { useDispatch, useSelector } from 'react-redux';
import css from './DevPanel.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { logIn, logOut } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  selectIsModalAddTransaction,
  selectIsModalDeleteTransaction,
  selectIsModalEditTransaction,
  selectIsModalLogOut,
} from '../../redux/modals/selectors';
import { MODALS, toggleModal } from '../../redux/modals/slice';
import { useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

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
  const isModalAddTransaction = useSelector(selectIsModalAddTransaction);
  // console.log({ isModalAddTransaction });
  const isModalEditTransaction = useSelector(selectIsModalEditTransaction);
  const isModalDeleteTransaction = useSelector(selectIsModalDeleteTransaction);
  const isModalLogOut = useSelector(selectIsModalLogOut);

  const handleAuth = () => {
    isLoggedIn ? dispatch(logOut()) : dispatch(logIn(JetCatsCreds));
  };
  const handleModals = modal => {
    // console.log(modal);
    dispatch(toggleModal(modal));
  };
  const [isPanelHidden, setIsPanelHidden] = useState(false);
  const handleHidePanel = e => {
    const hideBtn = e.currentTarget;
    const btnWidth = hideBtn.clientWidth;
    const panel = hideBtn.parentElement;
    const panelWidth = panel.clientWidth;
    isPanelHidden
      ? (panel.style.left = '0px')
      : (panel.style.left = -panelWidth + btnWidth + 'px');
    setIsPanelHidden(!isPanelHidden);
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
          {isModalAddTransaction ? 'Close' : 'Open'} AddTrans
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
        <button className={css.hideBtn} type="button" onClick={handleHidePanel}>
          {isPanelHidden ? <BiSolidRightArrow /> : <BiSolidLeftArrow />}
        </button>
      </div>
    )
  );
};
export default DevPanel;
