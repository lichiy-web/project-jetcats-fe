// import { Plus } from 'lucide-react';
import s from './ButtonAddTransaction.module.css';

const ButtonAddTransaction = ({ onClick }) => {
  return (
    <button
      className={s.addTransactionButton}
      onClick={onClick}
      aria-label="Add transaction"
    >
      <img src="/src/assets/+ btn.svg" alt="Add" />
      {/* <Plus size={26} /> */}
    </button>
  );
};

export default ButtonAddTransaction;
