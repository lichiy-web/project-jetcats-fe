import { useSelector } from 'react-redux';
import LogOut from '../LogOut/LogOut';
import s from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  return (
    <div className={s.userMenu}>
      {user.name && <h3 className={s.name}>{user.name}</h3>}
      <svg
        width="2"
        height="30"
        viewBox="0 0 2 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V30" stroke="#FCFCFC" />
      </svg>
      <LogOut />
    </div>
  );
};

export default UserMenu;
