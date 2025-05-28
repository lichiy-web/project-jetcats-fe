import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import TransactionList from '../TransactionList/TransactionList';
import s from './HomeTab.module.css';

const HomeTab = () => {
  return (
    <>
      <div className={s.list}>
        <section className={s.homeTabContainer}>
          <TransactionList />
          <ButtonAddTransaction />
          <ModalAddTransaction />
        </section>
      </div>
    </>
  );
};

export default HomeTab;
