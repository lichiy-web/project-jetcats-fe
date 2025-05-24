import css from './ModalEditTransaction.module.css';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import { useSelector } from 'react-redux';
import { selectIsModalEditTransaction } from '../../redux/modals/selectors';
const ModalEditTransaction = () => {
  const isModalEditTransaction = useSelector(selectIsModalEditTransaction);
  return (
    isModalEditTransaction && (
      <div className={css.wrap}>
        <h1>EditTransactionForm</h1>
        <h2 className={css.title}>Edit transaction</h2>
        <EditTransactionForm />
      </div>
    )
  );
};

export default ModalEditTransaction;
