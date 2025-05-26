import DudeHiSvg from '../../assets/DudeHi.svg';
import css from './DudeHi.module.css';

const DudeHi = () => {
  return (
    <div className={css.dudeWrapper}>
      <img
        src={DudeHiSvg}
        alt="Dude Hi"
        className={css.dudeLog}
      />
    </div>
  );
};

export default DudeHi;

