import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import TransactionList from '../TransactionList/TransactionList';
import s from './HomeTab.module.css';
import { fetchTransactions } from '../../redux/transactions/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../../redux/categories/operations';

const HomeTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

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
