import { useLocation } from 'react-router-dom';
import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import DudeHi from '../DudeHi/DudeHi';
import s from './BalanceOverview.module.css';
import { useMediaQuery } from 'react-responsive';
import DudeLike from '../DudeLike/DudeLike';

const BalanceOverview = () => {
  const location = useLocation();
  const isTablet = useMediaQuery({ maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const isHome = location.pathname === '/';
  const isCurrency = location.pathname === '/currency';
  const isStatistics = location.pathname === '/statistics';

  if (isMobile) {
    if (isHome) {
      return (
        <div className={s.mobileBalance}>
          <Balance />
        </div>
      );
    }
    if (isCurrency) {
      return (
        <div className={s.mobileWrapper}>
          <div className={s.mobileStats}>
            <Currency />
            <DudeHi />
          </div>
        </div>
      );
    }
    if (isStatistics) {
      return (
        <div className={s.mobileStats}>
          <DudeLike />
        </div>
      );
    }
    return null;
  }

  return isTablet ? (
    <>
      <div className={s.tabletContainer}>
        <div className={s.tabletCurrency}>
          <Currency />
        </div>
        <div className={s.dudeWrapper}>
          {isStatistics ? <DudeLike /> : <DudeHi />}
        </div>
      </div>
    </>
  ) : (
    <div className={s.container}>
      <Balance />
      <Currency />
      <div className={s.dudeWrapper}>
        {isStatistics ? <DudeLike /> : <DudeHi />}
      </div>
    </div>
  );
};

export default BalanceOverview;
