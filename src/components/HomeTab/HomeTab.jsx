import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import ModalDeleteTransaction from '../ModalDeleteTransaction/ModalDeleteTransaction';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import TransactionList from '../TransactionList/TransactionList';
import { useState } from 'react';
import s from './HomeTab.module.css';
// import { useDispatch } from 'react-redux';
// import { fetchTransactions } from '../../redux/transactions/operations';
// import { fetchCategories } from '../../redux/categories/operations';

const HomeTab = () => {
  // const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchTransactions());
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  const toggleModal = () => setIsModalOpen(prev => !prev);

  return (
    <>
      <section className={s.homeTabContainer}>
        <TransactionList />
        <ButtonAddTransaction onClick={toggleModal} />
        <ModalDeleteTransaction />
        <ModalEditTransaction />
      </section>
      {isModalOpen && <ModalAddTransaction onClose={toggleModal} />}
    </>
  );
};

export default HomeTab;
