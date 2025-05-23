import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { toggleModal } from '../../redux/modals/slice';
import DeleteForm from '../DeleteForm/DeleteForm';
import { selectcIsModalDeleteTransaction } from '../../redux/modals/selectors';
import css from './ModalDeleteTransaction.module.css';

Modal.setAppElement('#root');

const ModalDeleteTransaction = ({ transactionId }) => {
  const dispatch = useDispatch();
  const isModaDeleteTransaction = useSelector(selectcIsModalDeleteTransaction);
  const handleClose = () => {
    dispatch(toggleModal('DeleteTransAction'));
  };
  return (
    isModaDeleteTransaction && (
      <Modal
        isOpen={isModaDeleteTransaction}
        onRequestClose={handleClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <DeleteForm transactionId={transactionId} />
      </Modal>
    )
  );
};

export default ModalDeleteTransaction;
