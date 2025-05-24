import { useSelector } from 'react-redux';
import s from './Balance.module.css';
import { selectTransactions } from '../../redux/transactions/selectors';

const Balance = () => {
  const transactions = useSelector(selectTransactions);
  const balance = Array.isArray(transactions)
    ? transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
    : 0;
  // const balance = transactions.reduce((acc, t) => {
  //   return t.type === 'income' ? acc + t.amount : acc - t.amount;
  // }, 0);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Your balance</h1>
      <p className={s.amount}>{balance.toFixed(2)} UAH</p>
    </div>
  );
};

export default Balance;
