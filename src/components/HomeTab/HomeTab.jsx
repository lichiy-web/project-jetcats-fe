import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import ModalDeleteTransaction from '../ModalDeleteTransaction/ModalDeleteTransaction';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import TransactionList from '../TransactionList/TransactionList';

const HomeTab = () => {
  // console.log('Entered HomeTab!');
  return (
    <div>
      <TransactionList />
      <ButtonAddTransaction />
      <ModalAddTransaction />
      <ModalDeleteTransaction />
      <ModalEditTransaction />
    </div>
  );
};

export default HomeTab;
