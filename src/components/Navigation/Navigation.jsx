import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(s.link, isActive && s.active, s.mobileOnly)
          }
          to="/currency"
        >
          Currency
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
