import DudeLikeSvg from '../../assets/DudeLike.svg';
import css from './DudeLike.module.css';

const DudeLike = ({ isMobile = false, isTablet = false }) => {
  if (isMobile) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeLikeSvg} alt="Dude Hi" className={css.dudeMobile} />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className={css.dudeWrapper}>
        <img src={DudeLikeSvg} alt="Dude Hi" className={css.dudeTablet} />
      </div>
    );
  }

  return <img src={DudeLikeSvg} alt="Dude Hi" className={css.dude} />;
};
export default DudeLike;
