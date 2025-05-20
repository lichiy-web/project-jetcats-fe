import css from './InputName.module.css';
import { ImUser } from 'react-icons/im';

const InputName = () => {
  return (
    <div className={css.inputWrapper}>
      <ImUser size={24} color="#081222" />
      <input type="text" placeholder="Name" className={css.input} />
    </div>
  );
};

export default InputName;
