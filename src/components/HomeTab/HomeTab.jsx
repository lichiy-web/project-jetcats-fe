import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import ModalDeleteTransaction from '../ModalDeleteTransaction/ModalDeleteTransaction';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import TransactionList from '../TransactionList/TransactionList';
import s from './HomeTab.module.css';
import { MODALS, toggleModal } from '../../redux/modals/slice';
import { useDispatch } from 'react-redux';
// import { fetchTransactions } from '../../redux/transactions/operations';
// import { fetchCategories } from '../../redux/categories/operations';

const HomeTab = () => {
  const dispatch = useDispatch();
  const handleModals = modal => {
    dispatch(toggleModal(modal));
  };

  return (
    <>
      <section className={s.homeTabContainer}>
        <TransactionList />
        <ButtonAddTransaction onClick={() => handleModals(MODALS.add)} />
        <ModalAddTransaction />
        <ModalDeleteTransaction />
        <ModalEditTransaction />
      </section>
    </>
  );
};

export default HomeTab;
