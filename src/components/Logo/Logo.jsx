import css from './Logo.module.css';
import AppLogo from '../../assets/AppLogo.png';

const Logo = () => {
  return (
    <div className={css.logo}>
      <img src={AppLogo} alt="Logo" className={css.logoIcon} />
      <span>Spendy</span>
    </div>
  );
};

export default Logo;
