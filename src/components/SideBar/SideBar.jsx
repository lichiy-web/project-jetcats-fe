import { useLocation } from 'react-router-dom';
import BalanceOverview from '../BalanceOverview/BalanceOverview';
import Navigation from '../Navigation/Navigation';
import css from './SideBar.module.css';

const SideBar = () => {
  const location = useLocation();
  const isCurrencyPage = location.pathname === '/currency';

  return (
    <div className={css.sidebarWrapper}>
      <Navigation />
      {!isCurrencyPage && <BalanceOverview />}
    </div>
  );
};
export default SideBar;
