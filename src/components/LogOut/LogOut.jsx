import { useState } from 'react';
import LogoutModal from '../LogoutModal/LogoutModal.jsx';
import { ReactComponent as ExitIcon } from '../../assets/exit.svg';
import css from './LogOut.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/slectors.js';

const LogOut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name } = useSelector(selectUser);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={css.container}>
        <span className={css.name}>{name}</span>
        <span className={css.divider}></span>
        <button className={css.exitBtn} onClick={openModal}>
          <ExitIcon className={css.icon} />
          <span className={css.text}>Exit</span>
        </button>
      </div>

      {isModalOpen && <LogoutModal closeModal={closeModal} />}
    </>
  );
};

export default LogOut;
