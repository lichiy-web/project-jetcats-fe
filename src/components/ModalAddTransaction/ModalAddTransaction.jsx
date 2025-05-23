import { useSelector } from 'react-redux';
import { selectcIsModalAddTransaction } from '../../redux/modals/selectors';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';

const ModalAddTransaction = () => {
  const isModalAddTransaction = useSelector(selectcIsModalAddTransaction);
  console.log({ isModalAddTransaction });
  return (
    isModalAddTransaction && (
      <div>
        <h1>AddTransactionForm</h1>
        <AddTransactionForm />
      </div>
    )
  );
};

export default ModalAddTransaction;
