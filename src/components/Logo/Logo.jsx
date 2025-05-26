import css from './Logo.module.css';
import AppLogo from '../../assets/AppLogo.svg';
import clsx from 'clsx';

const Logo = ({ isAuth }) => {
  return (
    <div className={clsx(css.logo, isAuth && css.auth)}>
      <img
        src={AppLogo}
        alt="Logo"
        className={clsx(css.logoIcon, isAuth && css.auth)}
      />
      <span>Spendy</span>
    </div>
  );
};

export default Logo;
