import { useSelector } from 'react-redux';
// import { deleteTransaction } from '../../redux/transactions/operations';
import { format, isValid, parseISO } from 'date-fns';
import s from './TransactionItem.module.css';

const TransactionItem = ({
  transaction,
  isMobile = false,
  onEdit,
  onDelete,
}) => {
  // const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.items);

  const formatDate = isoDate => {
    if (!isoDate) return 'Invalid date';
    const date = parseISO(isoDate);
    return isValid(date) ? format(date, 'dd.MM.yy') : 'Invalid date';
  };

  // const handleDelete = () => dispatch(deleteTransaction(transaction._id));
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
              <svg className={s.divider} width="100%" height="2">
                <use href="/sprites.svg#divider-line"></use>
              </svg>
            )}
          </div>
        ))}

        <div className={s.buttonWrapper}>
          <button
            className={s.deleteButton}
            onClick={() => onDelete(transaction)}
          >
            Delete
          </button>
          <button className={s.editButton} onClick={onEdit}>
            <svg width="24" height="24">
              <use href="/sprites.svg#edit-icon"></use>
            </svg>
            <span className={s.editButtonText}>Edit</span>
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
            <svg className={s.editButton} width="24" height="24">
              <use href="/public/sprites.svg#edit-icon"></use>
            </svg>
          </button>
          <button
            className={s.deleteButton}
            onClick={() => onDelete(transaction._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
export default TransactionItem;
