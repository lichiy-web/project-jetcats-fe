import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StatisticsDashboard from '../StatisticsDashboard/StatisticsDashboard';
import StatisticsTabToggleAndChart from '../StatisticsTabToggleAndChart/StatisticsTabToggleAndChart';
import { summaryStatisticSelector } from '../../redux/summary/selectors';
import { setIsIncome } from '../../redux/summary/slice';
import { fetchSummary } from '../../redux/summary/operations';
import s from './StatisticsTab.module.css';

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const {
    isIncome,
    incomeData,
    expenseData,
    period: { year, month },
  } = useSelector(summaryStatisticSelector); // according to initialState (summaryStatisticSlice)

  // console.log({ period });
  const queryPeriod = `${year}-${month}`;
  const handleToggleChange = incomeExpenseType => {
    dispatch(setIsIncome(incomeExpenseType));
  };

  const incomeExpenseData = isIncome === 'income' ? incomeData : expenseData;

  const totalSum = incomeExpenseData.reduce(
    (sum, entry) => sum + entry.value,
    0
  );

  useEffect(() => {
    dispatch(fetchSummary(queryPeriod));
  }, [dispatch, queryPeriod]);

  return (
    <div className={s.statisticsContainer}>
      <StatisticsTabToggleAndChart
        handleToggleChange={handleToggleChange}
        incomeExpenseData={incomeExpenseData}
        isIncome={isIncome}
        totalSum={totalSum}
      />
      <StatisticsDashboard
        isIncome={isIncome}
        incomeExpenseData={incomeExpenseData}
        totalSum={totalSum}
      />
    </div>
  );
};

export default StatisticsTab;
///
