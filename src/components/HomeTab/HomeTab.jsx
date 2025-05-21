import ButtonAddTransaction from '../ButtonAddTransaction/ButtonAddTransaction';
import TransactionList from '../TransactionList/TransactionList';

const HomeTab = () => {
  return (
    <div>
      <TransactionList />
      <ButtonAddTransaction onClick={toggleModal} />
      {isModalOpen && <ModalAddTransaction onClose={toggleModal} />}
    </section>
  );
};

export default HomeTab;
