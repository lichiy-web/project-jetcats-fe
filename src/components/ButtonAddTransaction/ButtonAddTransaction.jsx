import s from './ButtonAddTransaction.module.css';
import { MODALS, toggleModal } from '../../redux/modals/slice';
import { useDispatch } from 'react-redux';

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  const handleModals = modal => {
    dispatch(toggleModal(modal));
  };
  return (
    <button
      className={s.addTransactionButton}
      onClick={() => handleModals(MODALS.add)}
      aria-label="Add transaction"
    >
      <svg width="56" height="56" aria-hidden="true">
        <use href="/sprites.svg#+button-icon" />
      </svg>
    </button>
  );
};

export default ButtonAddTransaction;
