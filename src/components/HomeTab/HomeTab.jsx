import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import ModalDeleteTransaction from '../ModalDeleteTransaction/ModalDeleteTransaction';
import ModalEditTransaction from '../ModalEditTransaction/ModalEditTransaction';
import TransactionList from '../TransactionList/TransactionList';
import CloseButton from '../CloseButton/CloseButton';

const HomeTab = () => {
  // console.log('Entered HomeTab!');
  return (
    <div>
      <CloseButton />
      <TransactionList />
      <ButtonAddTransaction />
      <ModalAddTransaction />
      <ModalDeleteTransaction />
      <ModalEditTransaction />
    </div>
  );
};

export default HomeTab;
