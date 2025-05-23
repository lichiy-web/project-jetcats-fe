import { RiLockPasswordFill } from 'react-icons/ri';

const InputConfirmPassword = () => {
  return (
    <div className="inputLogWrapper">
      <RiLockPasswordFill size={24} color="#081222" />
      <input type="text" placeholder="Confirm Password" className="inputLog" />
    </div>
  );
};

export default InputConfirmPassword;
