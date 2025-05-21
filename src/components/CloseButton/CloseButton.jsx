import css from './CloseButton.module.css';

const CloseButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className={css.closeBtn}
      onClick={onClick}
      aria-label="Close modal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path d="M1 1L17 17" stroke="#081222" />
        <path d="M1 17L17 1" stroke="#081222" />
      </svg>
    </button>
  );
};

export default CloseButton;
