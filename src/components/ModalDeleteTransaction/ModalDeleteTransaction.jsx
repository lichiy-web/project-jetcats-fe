import { useSelector } from 'react-redux';
import DeleteForm from '../DeleteForm/DeleteForm';
import { selectcIsModalDeleteTransAction } from '../../redux/modals/selectors';

const ModalDeleteTransaction = () => {
  const isModaDeleteTransaction = useSelector(selectcIsModalDeleteTransAction);
  return (
    isModaDeleteTransaction && (
      <div>
        <DeleteForm />
        <h1></h1>
        <DeleteForm />
      </div>
    )
  );
};

export default ModalDeleteTransaction;
