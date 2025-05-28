import DudeHiPng from '../../images/dudeHi/dudeHi-1x.png';
import css from './DudeHi.module.css';
import clsx from 'clsx';

const DudeHi = ({ isMobile = false, isTablet = false, className }) => {
  if (isMobile) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeHiPng} alt="Dude Hi" className={clsx(css.dudeMobile, className)}/>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeHiPng} alt="Dude Hi" className={clsx(css.dudeTablet, className)}/>

      </div>
    );
  }

  return <img src={DudeHiPng} alt="Dude Hi" className={clsx(css.dude, className)}/>;

};

export default DudeHi;
