import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import Logo from '../Logo/Logo';
import css from './DeleteForm.module.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/modals/slice';
import { deleteTransaction } from '../../redux/transactions/operations';

const DeleteForm = ({ transactionId }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(toggleModal('DeleteTransAction'));
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteTransaction(transactionId)).unwrap();
      dispatch(toggleModal('DeleteTransAction'));
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
