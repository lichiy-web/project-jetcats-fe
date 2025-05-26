import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import TransactionItem from '../TransactionItem/TransactionItem';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import s from './TransactionList.module.css';

const TransactionList = () => {
  const transactions = useSelector(state => state.transactions.items) || [];
  const [editedTransaction, setEditedTransaction] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleEdit = transaction => setEditedTransaction(transaction);
  const handleCloseModal = () => setEditedTransaction(null);

  if (!transactions.length) return <p>No transactions found</p>;

  return (
    <section className={s.transactionSection}>
      {isMobile ? (
        <ul className={s.transactionCardList}>
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction._id}
              transaction={transaction}
              isMobile
              onEdit={() => handleEdit(transaction)}
            />
          ))}
        </ul>
      ) : (
        <table className={s.transactionTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Sum</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <TransactionItem
                key={transaction._id}
                transaction={transaction}
                onEdit={() => handleEdit(transaction)}
              />
            ))}
          </tbody>
        </table>
      )}
      {editedTransaction && (
        <ModalEditTransaction
          transaction={editedTransaction}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default TransactionList;
