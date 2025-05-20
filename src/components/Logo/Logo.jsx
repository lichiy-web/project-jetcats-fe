import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logo}>
      <svg width="46" height="36" className={css.logoIcon}>
        <use href="/sprites.svg#logo-icon" />
      </svg>
      <span>Spendy</span>
    </div>
  );
};

export default Logo;
