import { useDispatch, useSelector } from 'react-redux';
import s from './CurrencyItem.module.css';
import {
  selectCurrencyData,
  selectCurrencyError,
} from '../../redux/currency/selectors';
import { useEffect } from 'react';
import { fetchCurrencyRates } from '../../redux/currency/operations';
import { toast, Slide } from 'react-toastify';

const CurrencyItem = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectCurrencyData);
  const error = useSelector(selectCurrencyError);

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Failed to load currency rates', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    }
  }, [error]);

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
