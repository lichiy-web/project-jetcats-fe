import DudeHi from '../../assets/DudeHi.svg';
import css from './DudeHi.module.css';

const dudeHi = () => {
  return <img src={DudeHi} alt="Dude Hi" className={css.dude} />;
};

export default dudeHi;
