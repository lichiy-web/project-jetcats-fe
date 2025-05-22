import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import DudeHi from '../DudeHi/DudeHi';
import s from './BalanceOverview.module.css';

const BalanceOverview = () => {
  return (
    <div className={s.container}>
      <Balance />
      <Currency />
      <div className={s.dudeWrapper}>
        <DudeHi />
      </div>
    </div>
  );
};

export default BalanceOverview;
