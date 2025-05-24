import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import s from './Chart.module.css';

const Chart = ({ incomeExpenseData }) => {
  console.log('что пришло из селектора ==>', incomeExpenseData);
  const COLORS = [
    '#dfad3f', // --main-yellow
    '#fd9498', // --chart-pink
    '#ffd8d0', // --chart-red
    '#c5baff', // --chart-light-purple
    '#6e78e8', // --chart-purple
    '#4a56e2', // --chart-blue
    '#81e1ff', // --chart-light-blue
    '#00ad84', // --chart-darker-green
    '#24cca7', // --chart-green
    '#f23a3a', // --main-light-red
  ];

  const totalSum = incomeExpenseData.reduce(
    (sum, entry) => sum + entry.value,
    0
  );

  return (
    <div className={s.ChartWrapper}>
      <div className={s.chartContainer}>
        <ResponsiveContainer width="100%" aspect={1}>
          {/* <PieChart width={400} height={400}> */}
          <PieChart>
            <Pie
              data={incomeExpenseData}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              nameKey="category"
              label={false}
            >
              {incomeExpenseData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className={s.totalSum}
            >
              {`\u0024 ${Number(totalSum).toFixed(2)}`}
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
