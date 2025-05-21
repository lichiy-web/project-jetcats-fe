import css from './LogOutButton.module.css';

const LogOutButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      Logout
    </button>
  );
};

export default LogOutButton;
