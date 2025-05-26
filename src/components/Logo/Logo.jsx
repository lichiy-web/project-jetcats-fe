import css from './Logo.module.css';
import AppLogo from '../../assets/AppLogo.svg';
import clsx from 'clsx';


const Logo = ({ isAuth }) => {
  return (
<<<<<<< HEAD
    <div className={css.logo}>
      <svg className={css.logoIcon}>
        <use href="/sprites.svg#logo-icon" />
      </svg>
       <svg className={css.logoIconMobile}>
        <use href="/sprites.svg#logo-modal-text-icon" />
      </svg>
      <span className={css.logoText}>Spendy</span>
=======
    <div className={clsx(css.logo, isAuth && css.auth)}>
      <img
        src={AppLogo}
        alt="Logo"
        className={clsx(css.logoIcon, isAuth && css.auth)}
      />
      <span>Spendy</span>
>>>>>>> 20fa734ab55fd2710ef735b8322ddaf1aecb5332
    </div>
  );
};

export default Logo;
