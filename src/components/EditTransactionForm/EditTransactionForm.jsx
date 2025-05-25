import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import InputAmount from '../InputAmount/InputAmount';
import InputCategory from '../InputCategory/InputCategory';
import InputComment from '../InputComment/InputComment';
import InputDate from '../InputDate/InputDate';
import ToggleDesc from '../ToggleDescTransaction/ToggleDescTransaction';

const EditTransactionForm = () => {
  return (
    <div>
      <CloseButton />
      <ToggleDesc />
      <InputCategory />
      <InputAmount />
      <InputDate />
      <InputComment />
      <CancelButton />
    </div>
  );
};

export default EditTransactionForm;
