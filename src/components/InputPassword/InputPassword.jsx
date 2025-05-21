import { RiLockPasswordFill } from 'react-icons/ri';

const InputPassword = () => {
  return (
    <div className="inputLogWrapper">
      <RiLockPasswordFill size={24} color="#081222" />
      <input type="password" placeholder="Password" className="inputLog" />
    </div>
  );
};

export default InputPassword;
