import dudeHi1x from '../../images/dudeHi/dudeHi-1x.png';
import dudeHi2x from '../../images/dudeHi/dudeHi-2x.png';
import css from './DudeHi.module.css';

const DudeHi = () => {
  return <img src={dudeHi1x} alt="Dude Hi" className={css.dude} />;
};

export default DudeHi;
