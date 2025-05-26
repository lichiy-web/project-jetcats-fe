import s from './Header.module.css';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import LogoutModal from '../LogoutModal/LogoutModal';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.userMenu}>
        <UserMenu />
      </div>
      <LogoutModal />
    </header>
  );
};

export default Header;
