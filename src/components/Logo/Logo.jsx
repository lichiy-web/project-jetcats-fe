import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logo}>
      <svg className={css.logoIcon}>
        <use href="/sprites.svg#logo-icon" />
      </svg>
      <span className={css.title}>Spendy</span>
    </div>
  );
};

export default Logo;
