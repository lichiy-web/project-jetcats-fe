import CancelButtonDelete from '../CancelButtonDelete/CancelButtonDelete';
import CloseButton from '../CloseButton/CloseButton';
import css from './DeleteForm.module.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { MODALS, toggleModal } from '../../redux/modals/slice';
import {
  deleteTransaction,
  fetchTransactions,
} from '../../redux/transactions/operations';
import Logo from '../Logo/Logo';

const DeleteForm = ({ transactionId, onClose }) => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    onClose();
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteTransaction(transactionId)).unwrap();
      await dispatch(fetchTransactions());
      onClose();
      dispatch(toggleModal(MODALS.delete));
    } catch (error) {
      toast.error('Failed to delete transaction:', error);
    }
  };

  return (
    <>
      <CloseButton onClick={handleCancel} />
      <div className={css.container}>
        <Logo isBlack={true} />
        <p className={css.text}>Are you sure you want to Delete?</p>

        <button onClick={handleDelete} className={css.deleteBtn}>
          Delete
        </button>
        <CancelButtonDelete onClick={onClose} />
      </div>
    </>
  );
};

export default DeleteForm;
