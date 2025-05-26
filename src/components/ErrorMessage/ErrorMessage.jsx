import css from './ErrorMessage.module.css';
import errImg from '../../assets/img/fetchError01-transparent.png';
// console.log('img = ', errImg);
const ErrorMessage = () => {
  return (
    <div className={css.errorMessage}>
      <div className={css.meassge}>
        Something went wrong... Try again later!
      </div>
      <img
        className={css.errorImage}
        src={errImg}
        alt="Fetch Error"
        width={400}
        height={400}
      />
    </div>
  );
};
export default ErrorMessage;
