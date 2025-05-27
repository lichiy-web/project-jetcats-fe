import { useSelector } from 'react-redux';
import s from './Balance.module.css';
// import { selectTransactions } from '../../redux/transactions/selectors';
import { selectBalance } from '../../redux/auth/selectors';

const Balance = () => {
  const balance = useSelector(selectBalance);
  // const transactions = useSelector(selectTransactions);
  // const balance = Array.isArray(transactions)
  //   ? transactions.reduce((acc, transaction) => {
  //       const amount = Number(transaction.sum);
  //       return transaction.type === 'expense' ? acc - amount : acc + amount;
  //     }, 0)
  //   : 0;
  // const balance = transactions.reduce((acc, t) => {
  //   return t.type === 'income' ? acc + t.amount : acc - t.amount;
  // }, 0);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Your balance</h1>
      <p className={s.amount}>
        {balance
          .toLocaleString('uk-UA', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
          .replace(',', '.')}{' '}
        UAH
      </p>
    </div>
  );
};

export default Balance;
