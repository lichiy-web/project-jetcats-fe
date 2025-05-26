import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logo}>
       <svg className={css.logoIcon}>
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
