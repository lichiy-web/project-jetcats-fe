import Chart from '../Chart/Chart';
import StatisticsDashboard from '../StatisticsDashboard/StatisticsDashboard';
import ToggleDesc from '../ToggleDescTransaction/ToggleDescTransaction';

const StatisticsTab = () => {
  console.timeLog('Entered StatisticsTab!');
  return (
    <div>
      <h3>StatisticsTab</h3>
      <ToggleDesc />
      <StatisticsDashboard />
      <Chart />
    </div>
  );
};

export default StatisticsTab;
