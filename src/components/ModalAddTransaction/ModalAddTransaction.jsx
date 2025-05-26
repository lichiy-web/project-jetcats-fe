import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsModalAddTransaction } from '../../redux/modals/selectors';
import { toggleModal, MODALS } from '../../redux/modals/slice';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import s from './ModalAddTransaction.module.css';

Modal.setAppElement('#root');

const ModalAddTransaction = () => {
  const isModalAddTransaction = useSelector(selectIsModalAddTransaction);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal(MODALS.add));
  };

  return (
    <Modal
      isOpen={isModalAddTransaction}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={s.modalOverlay}
      className={s.modalContent}
      contentLabel="Add Transaction Modal"
    >
      <AddTransactionForm onClose={closeModal} />
    </Modal>
  );
};

export default ModalAddTransaction;
