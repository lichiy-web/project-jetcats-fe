import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import TransactionItem from '../TransactionItem/TransactionItem';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import ModalDeleteTransaction from '../ModalDeleteTransaction/ModalDeleteTransaction';
import s from './TransactionList.module.css';

const TransactionList = () => {
  const transactions = useSelector(state => state.transactions.items) || [];
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const [editedTransaction, setEditedTransaction] = useState(null);
  // const handleEdit = transaction => setEditedTransaction(transaction);
  // const handleCloseModal = () => setEditedTransaction(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleEdit = transaction => {
    setSelectedTransaction(transaction);
    setEditModalOpen(true);
  };

  const handleDelete = transaction => {
    setSelectedTransaction(transaction);
    setDeleteModalOpen(true);
  };
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
              onDelete={() => handleDelete(transaction)}
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
              // <TransactionItem
              //   key={transaction._id}
              //   transaction={transaction}
              //   onEdit={() => handleEdit(transaction)}
              // />
              <TransactionItem
                key={transaction._id}
                transaction={transaction}
                onEdit={() => handleEdit(transaction)}
                onDelete={() => handleDelete(transaction)}
              />
            ))}
          </tbody>
        </table>
      )}
      {/* {editedTransaction && (
        <ModalEditTransaction
          transaction={editedTransaction}
          onClose={handleCloseModal}
        />
      )} */}
      {isEditModalOpen && (
        <ModalEditTransaction
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          transaction={selectedTransaction}
        />
      )}
      {isDeleteModalOpen && (
        <ModalDeleteTransaction
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          transactionId={selectedTransaction?._id}
        />
      )}
    </section>
  );
};

export default TransactionList;
