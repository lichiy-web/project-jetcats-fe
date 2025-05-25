import css from './RegisterButton.module.css';

const RegisterButton = () => {
  return (
    <button type="submit" className={css.btnWrapper}>
      Register
    </button>
  );
};

export default RegisterButton;
