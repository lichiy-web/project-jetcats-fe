// import { Plus } from 'lucide-react';
import { useEffect, useRef } from 'react';
import s from './ButtonAddTransaction.module.css';

const ButtonAddTransaction = ({ onClick }) => {
  const btn = useRef(null);
  useEffect(() => {
    const btnOffset = 24;
    const homeTab = btn.current.parentElement;
    homeTab.addEventListener('scroll', () => {
      const homeTabScrollTop = homeTab.scrollTop;
      btn.current.style.bottom = btnOffset - homeTabScrollTop + 'px';
      btn.current.style.right = btnOffset + 'px';
    });
  }, [btn]);
  return (
    <button
      ref={btn}
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
