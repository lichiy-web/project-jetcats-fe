import { useEffect, useState } from 'react';
import { currencyApi } from '../../redux/api/api';
import s from './CurrencyItem.module.css';

const CURRENCY_CACHE_KEY = 'monobank_currency_data';
const CACHE_TTL = 60 * 60 * 1000;

const CurrencyItem = () => {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const cached = JSON.parse(localStorage.getItem(CURRENCY_CACHE_KEY));

        const now = Date.now();

        if (cached && now - cached.timestamp < CACHE_TTL) {
          setCurrencyData(cached.data);
          return;
        }

        const response = await currencyApi.get('/bank/currency');
        const filtered = response.data.filter(
          ({ currencyCodeA, currencyCodeB }) =>
            (currencyCodeA === 840 || currencyCodeA === 978) &&
            currencyCodeB === 980
        );

        const formatted = filtered.map(item => ({
          currency:
            item.currencyCodeA === 840
              ? 'USD'
              : item.currencyCodeA === 978
              ? 'EUR'
              : '',
          purchase: item.rateBuy?.toFixed(2) || item.rateCross?.toFixed(2),
          sale: item.rateSell?.toFixed(2) || item.rateCross?.toFixed(2),
        }));

        setCurrencyData(formatted);
        localStorage.setItem(
          CURRENCY_CACHE_KEY,
          JSON.stringify({ data: formatted, timestamp: now })
        );
      } catch (error) {
        console.error('Помилка завантаження курсу валют:', error);
      }
    };

    fetchCurrency();
  }, []);

  return (
    <div>
      {currencyData.map(({ currency, purchase, sale }) => (
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
