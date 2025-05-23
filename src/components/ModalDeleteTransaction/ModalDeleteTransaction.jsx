import { useSelector } from 'react-redux';
import DeleteForm from '../DeleteForm/DeleteForm';
import { selectcIsModalDeleteTransAction } from '../../redux/modals/selectors';

const ModalDeleteTransaction = () => {
  const isModalDeleteTransaction = useSelector(selectcIsModalDeleteTransAction);
  return (
    isModalDeleteTransaction && (
      <div>
        <DeleteForm />
        <h1></h1>
        <DeleteForm />
      </div>
    )
  );
};

export default ModalDeleteTransaction;
