import css from './Logo.module.css';
import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
      <img src={logo} alt="Spendy logo" className={css.logo} />
  );
};

export default Logo;
