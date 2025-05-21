import css from './ModalEditTransaction.module.css';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
const ModalEditTransaction = () => {
  return (
    <div className={css.wrap}>
      <h2 className={css.title}>Edit transaction</h2>
      <EditTransactionForm />
    </div>
  );
};

export default ModalEditTransaction;
