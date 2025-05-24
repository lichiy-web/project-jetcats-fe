import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import s from './Chart.module.css';

const Chart = ({ incomeExpenseData, totalSum, colors }) => {
  return (
    <div className={s.ChartWrapper}>
      <div className={s.chartContainer}>
        <ResponsiveContainer width="100%" aspect={1}>
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
                  fill={colors[index % colors.length]}
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
