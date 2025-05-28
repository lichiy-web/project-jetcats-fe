import { useMediaQuery } from 'react-responsive';
import BalanceOverview from '../BalanceOverview/BalanceOverview';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isHome = location.pathname === '/';
  return (
    <div>
      <Navigation />
      {(!isMobile || (isMobile && isHome)) && <BalanceOverview />}
    </div>
  );
};
export default SideBar;
