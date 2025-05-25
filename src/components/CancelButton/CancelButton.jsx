import css from './CancelButton.module.css';
const CancelBtn = ({ onClick }) => {
  return (
    <div>
      <button className={css.btn} onClick={onClick}>
        Cancel
      </button>
    </div>
  );
};

export default CancelBtn;
