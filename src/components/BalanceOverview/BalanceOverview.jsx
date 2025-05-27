import { useLocation } from 'react-router-dom';
import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import DudeHi from '../DudeHi/DudeHi';
import s from './BalanceOverview.module.css';
import useMediaQuery from '../../utils/useMediaQuery';

const BalanceOverview = () => {
  const location = useLocation();
  const isTablet = useMediaQuery('(max-width: 1279px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  if (isMobile) {
    if (location.pathname === '/') {
      return (
        <div className={s.mobileBalance}>
          <Balance />
        </div>
      );
    }
    if (location.pathname === '/currency') {
      return (
        <div className={s.mobileStats}>
          <Currency />
          <DudeHi />
        </div>
      );
    }
    return null;
  }

  return isTablet ? (
    <>
      <div className={s.tabletBalance}>
        <Balance />
      </div>
      <div className={s.tabletContainer}>
        <div className={s.tabletCurrency}>
          <Currency />
        </div>
        {location.pathname === '/' && (
          <div className={s.dudeWrapper}>
            <DudeHi />
          </div>
        )}
      </div>
    </>
  ) : (
    <div className={s.container}>
      <Balance />
      <Currency />
      {location.pathname === '/' && (
        <div className={s.dudeWrapper}>
          <DudeHi />
        </div>
      )}
    </div>
  );
};

export default BalanceOverview;
