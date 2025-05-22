import css from './RegisterLink.module.css'
import { Link } from 'react-router-dom';


const RegisterLink = () => {
  return <Link to="/register" className={css.btnWrapper}>
      Register
    </Link>
};

export default RegisterLink;
