import DudeHiSvg from '../../assets/DudeHi.svg';
import css from './DudeHi.module.css';

const DudeHi = (isMobile = false) => {
  return (
    <img
      src={DudeHiSvg}
      alt="Dude Hi"
      className={isMobile ? css.dude : css.dudeMobile}
    />
  );
};

export default DudeHi;
