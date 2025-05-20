import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../redux/transactions/operations';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';

const TransactionItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => dispatch(deleteTransaction(transaction.id));
  const toggleEditModal = () => setIsEditModalOpen(prev => !prev);
  const isIncome = transaction.type === 'income';
  const sign = isIncome ? '+' : '-';
  return (
    <>
      <tr className="transaction-row">
        <td>{transaction.date}</td>
        <td>
          {sign}
          {transaction.type}
        </td>
        <td>{transaction.category}</td>
        <td>{transaction.comment}</td>
        <td>{transaction.amount.toFixed(2)}</td>
        <td>
          <button onClick={toggleEditModal}>
            <img src="/src/assets/Edit_Icon-min.svg" alt="Edit" />
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>

      {isEditModalOpen && (
        <ModalEditTransaction
          transaction={transaction}
          onClose={toggleEditModal}
        />
      )}
    </>
  );
};

export default TransactionItem;
