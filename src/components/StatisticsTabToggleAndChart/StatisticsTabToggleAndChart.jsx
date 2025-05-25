import Chart from '../Chart/Chart';
import ToggleDesc from '../ToggleDesc/ToggleDesc';
import { COLORS } from '../../utils/colorsIncomeExpense';

import s from './StatisticsTabToggleAndChart.module.css';

const StatisticsTabToggleAndChart = ({
  incomeExpenseData,
  isIncome,
  totalSum,
}) => {
  return (
    <div className={s.statisticsTabToggleAndChartWrapper}>
      <ToggleDesc />
      <Chart
        isIncome={isIncome}
        incomeExpenseData={incomeExpenseData}
        totalSum={totalSum}
        colors={COLORS}
      />
    </div>
  );
};

export default StatisticsTabToggleAndChart;
