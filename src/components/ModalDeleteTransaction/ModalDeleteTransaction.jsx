import { useSelector } from 'react-redux';
import DeleteForm from '../DeleteForm/DeleteForm';
import { selectIsModalDeleteTransAction } from '../../redux/modals/selectors';

const ModalDeleteTransaction = () => {
  const isModaDeleteTransaction = useSelector(selectIsModalDeleteTransAction);
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
