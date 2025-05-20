import { RiLockPasswordFill } from 'react-icons/ri';
import css from './InputConfirmPassword.module.css';

const InputConfirmPassword = () => {
  return (
    <div className={css.inputWrapper}>
      <RiLockPasswordFill size={24} color="#081222" />
      <input type="text" placeholder="Name" className={css.input} />
    </div>
  );
};

export default InputConfirmPassword;
