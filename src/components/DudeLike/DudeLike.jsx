import DudeLikePng from '../../images/dudeLike/DudeLike.png';
import css from './DudeLike.module.css';

const DudeLike = ({ isMobile = false, isTablet = false }) => {
  if (isMobile) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeLikePng} alt="Dude Hi" className={css.dudeMobile} />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeLikePng} alt="Dude Hi" className={css.dudeTablet} />
      </div>
    );
  }

  return <img src={DudeLikePng} alt="Dude Hi" className={css.dude} />;
};
export default DudeLike;
