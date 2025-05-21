import { useDispatch, useSelector } from 'react-redux';
import css from './DevPanel.module.css';
import { selectIsLoggedIn } from '../../redux/auth/slectors';
import { logIn, logOut } from '../../redux/auth/operations';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

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
  const handleAuth = () => {
    isLoggedIn ? dispatch(logOut()) : dispatch(logIn(JetCatsCreds));
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
      </div>
    )
  );
};
export default DevPanel;
