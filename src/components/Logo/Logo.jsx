import css from './Logo.module.css';
import AppLogo from '../../assets/AppLogo.svg';
import clsx from 'clsx';

const Logo = ({ isAuth }) => {
  return (
    <div className={css.logo}>
      <svg className={css.logoIcon}>
        <use href="/sprites.svg#logo-icon" />
      </svg>
      <span className={css.logoText}>Spendy</span>
    </div>
  );
};

export default Logo;
