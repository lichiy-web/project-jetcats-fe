import DudeHiPng from '../../images/dudeHi/dudeHi-1x.png';
import css from './DudeHi.module.css';

const DudeHi = ({
  isMobile = false,
  isTablet = false,
  isLoginPage = false,
}) => {
  if (isLoginPage) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeHiPng} alt="Dude Hi" className={css.dudeLogin} />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeHiPng} alt="Dude Hi" className={css.dudeMobile} />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeHiPng} alt="Dude Hi" className={css.dudeTablet} />
      </div>
    );
  }

  return <img src={DudeHiPng} alt="Dude Hi" className={css.dude} />;
};
export default DudeHi;
