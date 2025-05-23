import styles from './RegisterLink.module.css'
import { Link } from 'react-router-dom';


const RegisterLink = () => {
  return <Link to="/register" 
  className={`${styles.btnWrapper}`}>
      Register
    </Link>
};

export default RegisterLink;
