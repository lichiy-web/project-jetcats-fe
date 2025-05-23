import s from './SaveButton.module.css';

const SaveButton = () => {
  return (
    <div>
      <button type="submit" className={s.saveBtn}>
        Save
      </button>
    </div>
  );
};

export default SaveButton;
