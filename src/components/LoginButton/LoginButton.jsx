import styles from './LoginButton.module.css'

const LoginButton = ({ disabled }) => {
  return <button type="submit" className={`${styles.btnWrapper} button`} disabled={disabled}>LogIn</button>;
};

export default LoginButton;
