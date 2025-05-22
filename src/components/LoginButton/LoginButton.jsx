import css from './LoginButton.module.css'

const LoginButton = ({ disabled }) => {
  return <button type="submit" className={css.btnWrapper} disabled={disabled}>LogIn</button>;
};

export default LoginButton;
