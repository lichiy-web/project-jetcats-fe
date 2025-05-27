import DudeHiSvg from '../../assets/DudeHi.svg';
import css from './DudeHi.module.css';

const DudeHi = ({
  isMobile = false,
  isTablet = false,
  isLoginPage = false,
}) => {
  if (isLoginPage) {
    return <img src={DudeHiSvg} alt="Dude Hi" className={css.dudeLogin} />;
  }

  if (isMobile) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeHiSvg} alt="Dude Hi" className={css.dudeMobile} />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeHiSvg} alt="Dude Hi" className={css.dudeTablet} />
      </div>
    );
  }

  return <img src={DudeHiSvg} alt="Dude Hi" className={css.dude} />;
};
export default DudeHi;
