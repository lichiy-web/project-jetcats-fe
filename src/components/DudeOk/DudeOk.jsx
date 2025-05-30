import css from './DudeOk.module.css';
import dude1x from '../../assets/dude/DudeOk@1x.png';
import dude2x from '../../assets/dude/DudeOk@2x.png';

const DudeOk = () => {
  return (
    <img
      src={dude1x}
      srcSet={`${dude1x} 1x, ${dude2x} 2x`}
      alt="Dude Hi"
      className={css.dude}
    />
  );
};

export default DudeOk;