import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Navigation from '../Navigation/Navigation';
import Balance from '../Balance/Balance';
import BalanceOverview from '../BalanceOverview/BalanceOverview';
import css from './UserAccountLayout.module.css';

const UserAccountLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Header />
      <div className={css.pageWrapper}>
        {isDesktop && <SideBar />}
        
        {isTablet && (
          <div className={css.tabletWrapper}>
            <div className={css.tabletSidebar}>
              <div className={css.navigation}>
                <Navigation />
              </div>
              <div className={css.balance}>
                <Balance />
              </div>
            </div>
            <BalanceOverview
              className={css.balanceOverview}
            />
          </div>
        )}

        {isMobile && (
          <>
            <Navigation /> {isHomePage && <Balance />}
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
