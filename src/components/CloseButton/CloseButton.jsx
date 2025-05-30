import css from './CloseButton.module.css';

const CloseButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className={css.closeBtn}
      onClick={onClick}
      aria-label="Close modal"
    >
      <svg width="16" height="16" aria-hidden="true">
        <use href="/sprites.svg#cancel-x-icon" />
      </svg>
    </button>
  );
};

export default CloseButton;
