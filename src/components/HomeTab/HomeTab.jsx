import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import TransactionList from '../TransactionList/TransactionList';
import { useDispatch } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import { useEffect, useState } from 'react';
import { fetchTransactions } from '../../redux/transactions/operations';
import { fetchCategories } from '../../redux/transactions/operations';

const HomeTab = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };
  return (
    <section className="home-tab-container">
      <TransactionList />
      <ButtonAddTransaction onClick={toggleModal} />
      {isModalOpen && <ModalAddTransaction onClose={toggleModal} />}
    </section>
  );
};

export default HomeTab;
