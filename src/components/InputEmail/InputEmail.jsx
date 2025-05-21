import { MdEmail } from 'react-icons/md';

const InputEmail = () => {
  return (
    <div className="inputLogWrapper">
      <MdEmail size={24} color="#081222" />
      <input type="email" placeholder="E-mail" className="inputLog" />
    </div>
  );
};

export default InputEmail;
