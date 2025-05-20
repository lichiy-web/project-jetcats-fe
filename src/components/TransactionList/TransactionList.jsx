import { useSelector } from 'react-redux';
import TransactionItem from '../TransactionItem/TransactionItem';

const TransactionList = () => {
  const transactions = useSelector(state => state.transactions.items);

  if (!transactions.length) {
    return <p>No transactions found.</p>;
  }

  return (
    <div className="transaction-list-wrapper">
      <table className="transaction-table">
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
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
