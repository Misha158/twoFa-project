import React from "react";
import {
  LineChart,
  Line as LineChartComponent,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "./data";
import { Grid } from "antd";

export const Line = ({ title, width }) => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  return (
    <div style={{ minWidth: xs ? "300px" : "500px", height: "300px" }}>
      {title && <h2>{title}</h2>}
      <ResponsiveContainer width="100%" height="100%" className={"catdog"}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <LineChartComponent
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <LineChartComponent type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
