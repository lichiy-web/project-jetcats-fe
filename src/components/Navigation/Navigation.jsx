import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';

const links = [
  {
    to: '/',
    text: 'Home',
    icon: 'home-icon',
    showText: true,
    className: '',
  },
  {
    to: '/statistics',
    text: 'Statistics',
    icon: 'statistics-icon',
    showText: true,
    className: '',
  },
  {
    to: '/currency',
    text: '',
    icon: 'currency-mob-icon',
    showText: false,
    className: s.mobileOnly,
  },
];

const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        {links.map(({ to, text, icon, showText, className }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(s.link, isActive && s.active, className)
            }
          >
            {({ isActive }) => (
              <div className={s.svgContainer}>
                <div
                  className={clsx(
                    s.currencyIc,
                    to === '/currency' && s.currencyIcon
                  )}
                >
                  <svg
                    className={clsx(s.icon, isActive && s.activeIcon)}
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <use xlinkHref={`/sprites.svg#${icon}`} />
                  </svg>
                </div>
                {showText && <span className={s.linkText}>{text}</span>}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
