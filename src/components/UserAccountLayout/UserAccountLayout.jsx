import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import css from './UserAccountLayout.module.css';
import Balance from '../Balance/Balance';
import Navigation from '../Navigation/Navigation';
import BalanceOverview from '../BalanceOverview/BalanceOverview';

const UserAccountLayout = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  return (
    <div>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.pageWrapper}>
        {!isTablet && <SideBar />}

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
            <BalanceOverview className={css.balanceOverview} />
          </div>
        )}

        <main className={css.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserAccountLayout;
