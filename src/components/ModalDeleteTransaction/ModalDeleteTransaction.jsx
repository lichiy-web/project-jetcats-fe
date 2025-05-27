// import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
// import { MODALS, toggleModal } from '../../redux/modals/slice';
import DeleteForm from '../DeleteForm/DeleteForm';
// import { selectIsModalDeleteTransaction } from '../../redux/modals/selectors';
import css from './ModalDeleteTransaction.module.css';

Modal.setAppElement('#root');

const ModalDeleteTransaction = ({ isOpen, onClose, transactionId }) => {
  // const dispatch = useDispatch();

  // const closeModal = () => {
  //   dispatch(toggleModal(MODALS.delete));
  // };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={css.overlay}
    >
      <DeleteForm onClose={onClose} transactionId={transactionId} />
    </Modal>
  );
};

export default ModalDeleteTransaction;
