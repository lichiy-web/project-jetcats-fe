import { useLocation } from 'react-router-dom';
import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import DudeHi from '../DudeHi/DudeHi';
import s from './BalanceOverview.module.css';

const BalanceOverview = () => {
  const location = useLocation();

  return (
    <div className={s.container}>
      <Balance />
      <Currency />
      {location.pathname === '/' ? (
        <div className={s.dudeWrapper}>
          <DudeHi />
        </div>
      ) : null}
    </div>
  );
};

export default BalanceOverview;
