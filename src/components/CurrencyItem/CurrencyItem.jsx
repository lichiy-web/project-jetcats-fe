import { useDispatch, useSelector } from 'react-redux';
import s from './CurrencyItem.module.css';
import {
  selectCurrencyData,
  selectCurrencyError,
} from '../../redux/currency/selectors';
import { useEffect } from 'react';
import { fetchCurrencyRates } from '../../redux/currency/operations';

const CurrencyItem = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectCurrencyData);
  const error = useSelector(selectCurrencyError);

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  if (error) {
    return <p>Failed to load currency rates</p>;
  }

  return (
    <div>
      {data.map(({ currency, purchase, sale }) => (
        <ul key={currency} className={s.currencyList}>
          <li className={s.item}>{currency}</li>
          <li className={s.item}>{purchase}</li>
          <li className={s.item}>{sale}</li>
        </ul>
      ))}
    </div>
  );
};

export default CurrencyItem;
