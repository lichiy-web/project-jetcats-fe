import CancelButton from '../CancelButton/CancelButton';
import CloseButton from '../CloseButton/CloseButton';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import InputAmount from '../InputAmount/InputAmount';
import InputCategory from '../InputCategory/InputCategory';
import InputComment from '../InputComment/InputComment';
import ToggleDesc from '../ToggleDesc/ToggleDesc';

const EditTransactionForm = () => {
  return (
    <div>
      <CloseButton />
      <ToggleDesc />
      <InputCategory />
      <InputAmount />
      <CustomDatePicker />
      <InputComment />
      <CancelButton />
    </div>
  );
};

export default EditTransactionForm;
