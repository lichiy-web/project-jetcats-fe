import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
// import { selectIsModalEditTransaction } from '../../redux/modals/selectors';
import { toggleModal, MODALS } from '../../redux/modals/slice';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backdropFilter: 'blur(7px)',
    background: 'rgba(53, 83, 89, 0.4)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px 65px 46px',
    border: 'none',
    borderRadius: '8px',
    background: 'var(--main-light-green)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
};

const ModalEditTransaction = ({ isOpen, onClose, transaction }) => {
  // const isModalEditTransaction = useSelector(selectIsModalEditTransaction);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(toggleModal(MODALS.edit));
  };

  return (
    <Modal
      // isOpen={isModalEditTransaction}
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={customStyles}
      contentLabel="Edit Transaction Modal"
    >
      <EditTransactionForm onClose={onClose} transaction={transaction} />
    </Modal>
  );
};

export default ModalEditTransaction;
