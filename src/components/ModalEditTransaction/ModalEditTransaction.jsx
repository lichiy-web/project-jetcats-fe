import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toggleModal, MODALS } from '../../redux/modals/slice';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import s from './ModalEditTransaction.module.css';

Modal.setAppElement('#root');

const ModalEditTransaction = ({ isOpen, onClose, transaction }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(toggleModal(MODALS.edit));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={s.modalOverlay}
      className={s.modalContent}
      contentLabel="Edit Transaction Modal"
    >
      <EditTransactionForm onClose={onClose} transaction={transaction} />
    </Modal>
  );
};

export default ModalEditTransaction;
