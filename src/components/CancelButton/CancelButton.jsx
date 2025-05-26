import css from './CancelButton.module.css';
const CancelBtn = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={css.btn}>
        Cancel
      </button>
    </div>
  );
};

export default CancelBtn;
