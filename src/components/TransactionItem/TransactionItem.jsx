import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../../redux/transactions/operations';
import { format, isValid, parseISO } from 'date-fns';
import s from './TransactionItem.module.css';
import btnImgSrc from '../../assets/Edit_Icon-min.svg';
console.log({ btnImgSrc });
const TransactionItem = ({ transaction, isMobile = false, onEdit }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.items);

  const formatDate = isoDate => {
    if (!isoDate) return 'Invalid date';
    const date = parseISO(isoDate);
    return isValid(date) ? format(date, 'dd.MM.yy') : 'Invalid date';
  };

  const handleDelete = () => dispatch(deleteTransaction(transaction._id));
  const isIncome = transaction.type === 'income';
  const sign = isIncome ? '+' : '-';
  const category = categories.find(cat => cat._id === transaction.category);
  const categoryName = category ? category.name : 'Unknown';

  if (isMobile) {
    const transactionFields = [
      { label: 'Date', value: formatDate(transaction.date) },
      { label: 'Type', value: sign },
      { label: 'Category', value: categoryName },
      { label: 'Comment', value: transaction.comment, className: s.comment },
      { label: 'Sum', value: transaction.sum?.toFixed(2) ?? '0.00' },
    ];

    // return (
    //   <li className={`${s.transactionCard} ${isIncome ? s.income : s.expense}`}>
    //     <div className={s.transactionField}>
    //       <span>Date:</span>
    //       <span>{formatDate(transaction.date)}</span>
    //     </div>
    //     <svg width="288" height="2" viewBox="0 0 288 2" fill="none">
    //       <path opacity="0.4" d="M0 1L288 1" stroke="#FCFCFC" />
    //     </svg>
    //     <div className={s.transactionField}>
    //       <span>Type:</span>
    //       <span>{sign}</span>
    //     </div>
    //     <svg width="288" height="2" viewBox="0 0 288 2" fill="none">
    //       <path opacity="0.4" d="M0 1L288 1" stroke="#FCFCFC" />
    //     </svg>
    //     <div className={s.transactionField}>
    //       <span>Category:</span>
    //       <span>{categoryName}</span>
    //     </div>
    //     <svg width="288" height="2" viewBox="0 0 288 2" fill="none">
    //       <path opacity="0.4" d="M0 1L288 1" stroke="#FCFCFC" />
    //     </svg>
    //     <div className={s.transactionField}>
    //       <span>Comment:</span>
    //       <span className={s.comment} title={transaction.comment}>
    //         {transaction.comment}
    //       </span>
    //     </div>
    //     <svg width="288" height="2" viewBox="0 0 288 2" fill="none">
    //       <path opacity="0.4" d="M0 1L288 1" stroke="#FCFCFC" />
    //     </svg>
    //     <div className={s.transactionField}>
    //       <span>Sum:</span>
    //       <span>{transaction.sum?.toFixed(2) ?? '0.00'}</span>
    //     </div>
    //     <svg width="288" height="2" viewBox="0 0 288 2" fill="none">
    //       <path opacity="0.4" d="M0 1L288 1" stroke="#FCFCFC" />
    //     </svg>
    //     <div className={s.buttonWrapper}>
    //       <button className={s.deleteButton} onClick={handleDelete}>
    //         Delete
    //       </button>
    //       <button className={s.editButton} onClick={onEdit}>
    //         <img src="/src/assets/Edit_Icon-min.svg" alt="Edit" />
    //       </button>
    //     </div>
    //   </li>}
    // );

    return (
      <li className={`${s.transactionCard} ${isIncome ? s.income : s.expense}`}>
        {transactionFields.map(({ label, value, className }, index) => (
          <div key={label} className={s.transactionField}>
            <span>{label}:</span>
            <span
              className={className}
              title={label === 'Comment' ? value : ''}
            >
              {value}
            </span>
            {index < transactionFields.length && (
              <svg width="100%" height="2" viewBox="0 0 288 2" fill="none">
                <path opacity="0.4" d="M0 1L288 1" stroke="#FCFCFC" />
              </svg>
            )}
          </div>
        ))}

        <div className={s.buttonWrapper}>
          <button className={s.deleteButton} onClick={handleDelete}>
            Delete
          </button>
          <button className={s.editButton} onClick={onEdit}>
            <img src={btnImgSrc} alt="Edit" />
          </button>
        </div>
      </li>
    );
  }
  return (
    <tr className={s.transactionRow} tabIndex="1">
      <td>{formatDate(transaction.date)}</td>
      <td>{sign}</td>
      <td>{categoryName}</td>
      <td className={s.comment} title={transaction.comment}>
        {transaction.comment}
      </td>
      <td>{transaction.sum?.toFixed(2) ?? '0.00'}</td>
      <td>
        <div className={s.buttonWrapper}>
          <button className={s.editButton} onClick={onEdit}>
            <img src={btnImgSrc} alt="Edit" />
          </button>
          <button className={s.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
export default TransactionItem;
