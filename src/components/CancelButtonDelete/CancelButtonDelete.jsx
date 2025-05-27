import css from './CancelButtonDelete.module.css';
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
