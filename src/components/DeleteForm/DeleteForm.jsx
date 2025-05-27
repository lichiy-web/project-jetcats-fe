import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import logo from '../../assets/logo-modal.svg';
import css from './DeleteForm.module.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { MODALS, toggleModal } from '../../redux/modals/slice';
import { deleteTransaction } from '../../redux/transactions/operations';

const DeleteForm = ({ transactionId, onClose }) => {
  const dispatch = useDispatch();

  // const handleCancel = () => {
  //   dispatch(toggleModal(MODALS.delete));
  // };
  const handleCancel = () => {
    onClose();
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteTransaction(transactionId)).unwrap();
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
        <img src={logo} alt="Spendy logo" className={css.logo} />
        <p className={css.text}>Are you sure you want to Delete?</p>

        <button onClick={handleDelete} className={css.deleteBtn}>
          Delete
        </button>
        <CancelButton onClick={onClose} />
      </div>
    </>
  );
};

export default DeleteForm;
