import css from './InputPassword.module.css'
import { RiLockPasswordFill } from "react-icons/ri";

const InputPassword = () => {
  return <div className={css.inputWrapper}>
      <RiLockPasswordFill size={24} color="#081222" />
      <input type="password" placeholder="Password" className={css.input}/>
      </div>;
};

export default InputPassword;
