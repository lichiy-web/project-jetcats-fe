import { useDispatch, useSelector } from 'react-redux';
import s from './CurrencyItem.module.css';
import {
  selectCurrencyData,
  selectCurrencyError,
  selectCurrencyLoading,
} from '../../redux/currencyItem/currencySelectors';
import { useEffect } from 'react';
import { fetchCurrencyRates } from '../../redux/currencyItem/currencySlice';

const CurrencyItem = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectCurrencyData);
  const loading = useSelector(selectCurrencyLoading);
  const error = useSelector(selectCurrencyError);

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
