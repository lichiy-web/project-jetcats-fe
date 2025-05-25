import DudeOk1x from '../../assets/dude/dudeOk@1x.png';
import DudeOk2x from '../../assets/dude/dudeOk@2x.png';
import css from './DudeOk.module.css';

const DudeOk = () => {
  return (
    <img
      src={DudeOk1x}
      srcSet={`${DudeOk1x} 1x, ${DudeOk2x} 2x`}
      alt="Dude Ok"
      className={css.dude}
    />
  );
};

export default DudeOk;
