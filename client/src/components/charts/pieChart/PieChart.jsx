import React, { PureComponent } from "react";
import {
  PieChart as PieChartComponent,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const renderLegend = (props) => {
  const { payload } = props;

  console.log(props);

  return (
    <ul>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ color: entry.color }}>
          {entry.value} - {entry.payload.value} (
          {Math.round((entry.payload.percent * 100).toFixed(2))}%)
        </li>
      ))}
    </ul>
  );
};

export const PieChart = ({ title }) => {
  const data = [
    { name: "Group A", value: Math.floor(Math.random() * (1000 + 1)) },
    { name: "Group B", value: Math.floor(Math.random() * (1000 + 1)) },
    { name: "Group C", value: Math.floor(Math.random() * (1000 + 1)) },
    { name: "Group D", value: Math.floor(Math.random() * (1000 + 1)) },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {title && <h2>{title}</h2>}
      <PieChartComponent width={450} height={300}>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          content={renderLegend}
        />
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChartComponent>
    </div>
  );
};
