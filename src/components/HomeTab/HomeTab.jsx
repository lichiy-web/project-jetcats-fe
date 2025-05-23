import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import ModalDeleteTransaction from '../ModalDeleteTransaction/ModalDeleteTransaction';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import TransactionList from '../TransactionList/TransactionList';
import s from './HomeTab.module.css';
// import { fetchTransactions } from '../../redux/transactions/operations';
// import { fetchCategories } from '../../redux/categories/operations';

const HomeTab = () => {
  return (
    <>
      <section className={s.homeTabContainer}>
        <TransactionList />
        <ButtonAddTransaction />
        <ModalAddTransaction />
        <ModalDeleteTransaction />
        <ModalEditTransaction />
      </section>
    </>
  );
};

export default HomeTab;
