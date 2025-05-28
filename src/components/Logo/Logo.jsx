import css from './Logo.module.css';
import clsx from 'clsx';

const Logo = ({ isBlack }) => {
  return (
    <div className={clsx(css.logo, isBlack && css.black)}>
      <svg className={clsx(css.logoIcon, isBlack && css.black)}>
        <use href="/sprites.svg#logo-icon" />
      </svg>
      <svg className={css.logoIconMobile}>
        <use href="/sprites.svg#logo-modal-text-icon" />
      </svg>
      <span className={css.logoText}>Spendy</span>
    </div>
  );
};

export default Logo;

