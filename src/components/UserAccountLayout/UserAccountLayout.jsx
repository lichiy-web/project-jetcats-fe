import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import css from './UserAccountLayout.module.css';

const UserAccountLayout = () => {
  return (
    <div>
      <Header />
      <div className={css.pageWrapper}>
        <SideBar />
        <main className={css.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserAccountLayout;
