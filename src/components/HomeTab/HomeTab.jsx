import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import ModalDeleteTransaction from '../ModalDeleteTransaction/ModalDeleteTransaction';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import TransactionList from '../TransactionList/TransactionList';
import s from './HomeTab.module.css';
import { fetchTransactions } from '../../redux/transactions/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../../redux/categories/operations';
// import ScrollBar from '../../assets/scrollBar.svg';

const HomeTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <>
      <div className={s.homeTabWrapContainer}>
        <section className={s.homeTabContainer}>
          <TransactionList />
          <ButtonAddTransaction />
          <ModalAddTransaction />
          <ModalDeleteTransaction />
          <ModalEditTransaction />
        </section>
      </div>
    </>
  );
};
// const HomeTab = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTransactions());
//     dispatch(fetchCategories());

//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const percentageScrolled = (scrollTop / scrollHeight) * 100;
//       setScrollPosition(percentageScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [dispatch]);

//   return (
//     <>
//       <div className={s.homeTabWrapContainer}>
//         <section
//           className={s.homeTabContainer}
//           style={{ width: '752px', position: 'relative' }}
//         >
//           <img
//             src={ScrollBar}
//             alt="scroll"
//             className={s.scrollBar}
//             style={{ transform: `translateY(${scrollPosition * 3}px)` }}
//           />
//           <TransactionList />
//           <ButtonAddTransaction />
//           <ModalAddTransaction />
//           <ModalDeleteTransaction />
//           <ModalEditTransaction />
//         </section>
//       </div>
//     </>
//   );
// };

export default HomeTab;
