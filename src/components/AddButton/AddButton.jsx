import s from './AddButton.module.css';

const SaveButton = () => {
  return (
    <div>
      <button type="submit" className={s.saveBtn}>
        Add
      </button>
    </div>
  );
};

export default SaveButton;
