import TransactionItem from '../TransactionItem/TransactionItem';

const TransactionList = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        <li>
          <TransactionItem />
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
