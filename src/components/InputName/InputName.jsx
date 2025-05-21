import { ImUser } from 'react-icons/im';

const InputName = () => {
  return (
    <div className="inputLogWrapper">
      <ImUser size={24} color="#081222" />
      <input type="text" placeholder="Name" className="inputLog" />
    </div>
  );
};

export default InputName;
