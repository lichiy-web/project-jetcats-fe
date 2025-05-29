import css from './CancelButtonDelete.module.css';
const CancelBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      Cancel
    </button>
  );
};

export default CancelBtn;
