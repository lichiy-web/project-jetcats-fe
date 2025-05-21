// import { useSelector } from 'react-redux';
import TransactionItem from '../TransactionItem/TransactionItem';
import transactionsData from '../TransactionList/transactions.json';
import s from './TransactionList.module.css';

const TransactionList = () => {
  // const { items: transactions, isLoading: isTransactionsLoading } = useSelector(
  //   state => state.transactions
  // );
  // const { items: categories, isLoading: isCategoriesLoading } = useSelector(
  //   state => state.categories
  // );

  // const isLoading = isTransactionsLoading || isCategoriesLoading;

  // if (isLoading) return <p>Loading...</p>;
  // if (!transactions.length) return <p>No transactions found</p>;
  // if (!categories.length) return <p>Categories not loaded</p>;
  const transactions = transactionsData.transactions;

  return (
    <div className={s.transactionTableContainer}>
      <table className={s.transactionTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <TransactionItem key={transaction._id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
