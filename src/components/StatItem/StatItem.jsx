import s from './StatItem.module.css';

const StatItem = ({ category, value, colors }) => {
  return (
    <li className={s.tableItemWrapper}>
      <div className={s.topContentWrapper}>
        <div
          className={s.colorBoxCategory}
          style={{ backgroundColor: colors }}
        ></div>
        <div className={s.itemTitleWrapper}>
          <span className={s.titleItemCategorySum}>{category}</span>
          <span className={s.titleItemCategorySum}>{value.toFixed(2)}</span>
        </div>
      </div>

      <div className={s.itemBottomLine}></div>
    </li>
  );
};

export default StatItem;
