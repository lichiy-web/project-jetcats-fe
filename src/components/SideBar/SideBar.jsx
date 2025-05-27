import BalanceOverview from '../BalanceOverview/BalanceOverview';
import Navigation from '../Navigation/Navigation';
import css from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={css.sidebar}>
      <Navigation />
      <BalanceOverview />
    </div>
  );
};
export default SideBar;
