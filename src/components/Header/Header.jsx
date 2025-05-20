import s from './Header.module.css';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.userMenu}>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
