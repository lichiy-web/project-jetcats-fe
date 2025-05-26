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
          {({ isActive }) => (
            <div className={s.svgContainer}>
              <svg
                className={clsx(s.icon, isActive && s.activeIcon)}
                fill="linear-gradient(180deg, #294045 0%, #1e2f33 100%)"
              >
                <use xlinkHref="/sprites.svg#home-icon" />
              </svg>
              Home
            </div>
          )}
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/statistics"
        >
          {({ isActive }) => (
            <div className={s.svgContainer}>
              <svg className={clsx(s.icon, isActive && s.activeIcon)}>
                <use xlinkHref="/sprites.svg#statistics-icon" />
              </svg>
              Statistics
            </div>
          )}
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
