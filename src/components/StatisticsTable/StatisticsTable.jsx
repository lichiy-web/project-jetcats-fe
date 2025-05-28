import StatItem from '../StatItem/StatItem';
import { COLORS } from '../../utils/colorsIncomeExpense';

import s from './StatisticsTable.module.css';
import { useSelector } from 'react-redux';
import { summaryStatisticSelector } from '../../redux/summary/selectors';

const StatisticsTable = ({ incomeExpenseData, totalSum }) => {
  const { isIncome } = useSelector(summaryStatisticSelector);

  if (!incomeExpenseData || incomeExpenseData.length === 0) {
    return <div className={s.noData}>No data available</div>;
  }
  return (
    <div className={s.tableContainer}>
      <div className={s.tableHeaderWrapper}>
        <span className={s.headerItem}>Category</span>
        <span className={s.headerItem}>Sum</span>
      </div>
      <ul className={s.statisticsTableBody}>
        {incomeExpenseData.map((item, index) => (
          <StatItem
            key={index}
            category={item.category}
            value={item.value}
            colors={COLORS[index % COLORS.length]}
          />
        ))}
      </ul>
      <div className={s.totalTableSumWrapper}>
        <span className={s.totalTableIncomeExpense}>
          {isIncome === 'income' ? 'Income:' : 'Expenses:'}
        </span>
        <span
          className={
            isIncome === 'income' ? s.totalTableSum : s.totalTableSumRed
          }
        >
          {Number(totalSum).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default StatisticsTable;
