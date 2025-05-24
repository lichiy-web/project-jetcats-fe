import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

const Loader = ({ isLoading = true, strokeColor = '#ffffff' }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={isLoading}
        height="100%"
        width="100%"
        strokeColor={strokeColor}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};
export default Loader;
