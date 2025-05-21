import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import TransactionList from '../TransactionList/TransactionList';

const HomeTab = () => {
  // console.log('Entered HomeTab!');
  return (
    <div>
      <TransactionList />
      <ButtonAddTransaction />
    </div>
  );
};

export default HomeTab;
