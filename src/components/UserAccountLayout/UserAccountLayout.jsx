import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import MobNavigation from '../MobNavigation/MobNavigation';
import css from './UserAccountLayout.module.css';
import Balance from '../Balance/Balance';

const UserAccountLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletOrAbove = useMediaQuery({ minWidth: 768 });

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Header />
      <div className={css.pageWrapper}>
        {isTabletOrAbove && <SideBar />}
        {isMobile && (
          <>
            <MobNavigation /> {isHomePage && <Balance />}
          </>
        )}
        <main className={css.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserAccountLayout;
