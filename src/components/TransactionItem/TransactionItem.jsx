import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../../redux/transactions/operations';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import s from './TransactionItem.module.css';
import { format } from 'date-fns';

const TransactionItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const categories = useSelector(state => state.categories.items);
  const formatDate = isoDate => format(new Date(isoDate), 'dd.MM.yy');
  const handleDelete = () => dispatch(deleteTransaction(transaction._id));
  const toggleEditModal = () => setIsEditModalOpen(prev => !prev);
  const isIncome = transaction.type === 'income';
  const sign = isIncome ? '+' : '-';

  const category = categories.find(cat => cat._id === transaction.category);
  const categoryName = category ? category.name : 'Unknown';

  return (
    <>
      <tr className={s.transactionRow} tabIndex="1">
        <td>{formatDate(transaction.date)}</td>
        <td>{sign}</td>
        <td>{categoryName}</td>
        <td className={s.comment} title={transaction.comment}>
          {transaction.comment}
        </td>
        <td>{transaction.sum.toFixed(2)}</td>
        <td>
          <div className={s.buttonWrapper}>
            <button className={s.editButton} onClick={toggleEditModal}>
              <img src="/src/assets/Edit_Icon-min.svg" alt="Edit" />
            </button>
            <button className={s.deleteButton} onClick={handleDelete}>
              Delete
            </button>
          </div>
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
