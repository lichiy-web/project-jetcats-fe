import CurrencyItem from '../CurrencyItem/CurrencyItem';
import s from './Currency.module.css';

const Currency = () => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.listItem}>Currency</li>
        <li className={s.listItem}>Purchase</li>
        <li className={s.listItem}>Sale</li>
      </ul>
      <CurrencyItem className={s.item} />
    </div>
  );
};

export default Currency;
