import css from './InputEmail.module.css'
import { MdEmail } from "react-icons/md";

const InputEmail = () => {
  return <div className={css.inputWrapper}>
    <MdEmail size={24} color="#081222" />
    <input type="email" placeholder="Email" className={css.input}/>
    </div>;
};

export default InputEmail;
