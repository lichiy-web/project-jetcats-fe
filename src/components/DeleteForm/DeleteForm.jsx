import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import Logo from '../Logo/Logo';
import css from './DeleteForm.module.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { MODALS, toggleModal } from '../../redux/modals/slice';
import { deleteTransaction } from '../../redux/transactions/operations';

const DeleteForm = ({ transactionId }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(toggleModal(MODALS.delete));
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteTransaction(transactionId)).unwrap();
      dispatch(toggleModal(MODALS.delete));
    } catch (error) {
      toast.error('Failed to delete transaction:', error);
    }
  };

  return (
    <div className={css.container}>
      <CloseButton onClick={handleCancel} />
      <Logo />
      <p className={css.text}>Are you sure you want to Delete?</p>

      <button onClick={handleDelete} className={css.deleteBtn}>
        Delete
      </button>
      <CancelButton className={css.cancelBtn} onClick={handleCancel} />
    </div>
  );
};

export default DeleteForm;
