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
                preserveAspectRatio="xMidYMid meet"
              >
                <use xlinkHref="/sprites.svg#home-icon" />
              </svg>
              <span className={s.linkText}>Home</span>
            </div>
          )}
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="/statistics"
        >
          {({ isActive }) => (
            <div className={s.svgContainer}>
              <svg
                className={clsx(s.icon, isActive && s.activeIcon)}
                preserveAspectRatio="xMidYMid meet"
              >
                <use xlinkHref="/sprites.svg#statistics-icon" />
              </svg>
              <span className={s.linkText}>Statistics</span>
            </div>
          )}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(s.link, isActive && s.active, s.mobileOnly)
          }
          to="/currency"
        >
          {({ isActive }) => (
            <div className={s.svgContainer}>
              <div className={s.currencyIcon}>
                <svg
                  className={clsx(s.icon, isActive && s.activeIcon)}
                  preserveAspectRatio="xMidYMid meet"
                >
                  <use xlinkHref="/sprites.svg#currency-mob-icon" />
                </svg>
              </div>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
