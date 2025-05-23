import BalanceOverview from '../BalanceOverview/BalanceOverview';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Navigation />
      {isHomePage && <BalanceOverview />}
    </div>
  );
};
export default SideBar;
