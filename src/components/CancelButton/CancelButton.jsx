import css from './CancelButton.module.css';
const CancelBtn = ({ onClick, className = '' }) => {
  return (
    <div>
      <button onClick={onClick} className={`${css.btn} ${className || ''}`}>
        Cancel
      </button>
    </div>
  );
};

export default CancelBtn;
