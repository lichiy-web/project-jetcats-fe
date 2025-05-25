import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StatisticsDashboard from '../StatisticsDashboard/StatisticsDashboard';
import StatisticsTabToggleAndChart from '../StatisticsTabToggleAndChart/StatisticsTabToggleAndChart';
import { summaryStatisticSelector } from '../../redux/summary/summaryStatisticSelector';
import { setIsIncome } from '../../redux/summary/summaryStatisticSlice';
import { fetchSummary } from '../../redux/summary/summaryStatisticOperations';

import s from './StatisticsTab.module.css';

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const { isIncome, incomeData, expenseData } = useSelector(
    summaryStatisticSelector
  ); // according to initialState (summaryStatisticSlice)

  const handleToggleChange = incomeExpenseType => {
    dispatch(setIsIncome(incomeExpenseType));
  };

  const incomeExpenseData = isIncome === 'income' ? incomeData : expenseData;

  const totalSum = incomeExpenseData.reduce(
    (sum, entry) => sum + entry.value,
    0
  );

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  return (
    <div className={s.statisticsContainer}>
      {/* <h3>===StatisticsTab===</h3> */}
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
//
