import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsModalEditTransaction } from '../../redux/modals/selectors';
import { toggleModal, MODALS } from '../../redux/modals/slice';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import s from './ModalEditTransaction.module.css';

Modal.setAppElement('#root');

const ModalEditTransaction = () => {
  const isModalEditTransaction = useSelector(selectIsModalEditTransaction);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(toggleModal(MODALS.edit));
  };

  return (
    <Modal
      isOpen={isModalEditTransaction}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={s.modalOverlay}
      className={s.modalContent}
      contentLabel="Edit Transaction Modal"
    >
      <EditTransactionForm onClose={closeModal} />
    </Modal>
  );
};

export default ModalEditTransaction;
