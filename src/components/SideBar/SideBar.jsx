import { useLocation } from 'react-router-dom';
import BalanceOverview from '../BalanceOverview/BalanceOverview';
import Navigation from '../Navigation/Navigation';

const SideBar = () => {
  const location = useLocation();
  const isCurrencyPage = location.pathname === '/currency';

  return (
    <div>
      <Navigation />
      {!isCurrencyPage && <BalanceOverview />}
    </div>
  );
};
export default SideBar;
