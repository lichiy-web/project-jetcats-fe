import Chart from '../Chart/Chart';
import ToggleDesc from '../ToggleDesc/ToggleDesc';

import s from './StatisticsTabToggleAndChart.module.css';

const StatisticsTabToggleAndChart = ({ incomeExpenseData, isIncome }) => {
  return (
    <div className={s.statisticsTabToggleAndChartWrapper}>
      <ToggleDesc />
      <Chart isIncome={isIncome} incomeExpenseData={incomeExpenseData} />
    </div>
  );
};

export default StatisticsTabToggleAndChart;
