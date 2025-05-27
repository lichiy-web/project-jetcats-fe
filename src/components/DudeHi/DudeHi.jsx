import clsx from 'clsx';
import DudeHiSvg from '../../assets/DudeHi.svg';
import css from './DudeHi.module.css';

const DudeHi = ({ className = '' }) =>{
  return (
   <div className={clsx(css.dudeWrap, className)}>
      <img
        src={DudeHiSvg}
        alt="Dude Hi"
        className={`${css.dude} ${className}`}
      />
      </div>
  );
};

export default DudeHi;

