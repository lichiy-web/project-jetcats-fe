import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import InputAmount from '../InputAmount/InputAmount';
import InputComment from '../InputComment/InputComment';
import InputDate from '../InputDate/InputDate';
import ToggleDesc from '../ToggleDesc/ToggleDesc';

const AddTransactionForm = () => {
  return (
    <div>
      <CloseButton />
      <h3>ModalAddTransaction</h3>
      <ToggleDesc />
      <InputAmount />
      <InputDate />
      <InputComment />
      <CancelButton />
    </div>
  );
};

export default AddTransactionForm;
