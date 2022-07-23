import React from "react";
import { PieChart as PieChartComponent, Pie, Label, Cell } from "recharts";
import "./style.css";

export const PieChart = () => {
  const valFromBack = 30;

  const val = 100 - valFromBack;

  const data1 = [
    {
      name: "1",
      value: valFromBack,
    },
    {
      name: "2",
      value: val,
    },
  ];

  return (
    <div style={{ width: "150px", height: "150px" }}>
      <PieChartComponent width={200} height={200}>
        <defs>
          <linearGradient id={"1"}>
            <stop offset={"0%"} stopColor={"darkgreen"} />
            <stop offset={"100%"} stopColor={"green"} />
          </linearGradient>
        </defs>
        <Pie
          data={data1}
          innerRadius={45}
          outerRadius={70}
          dataKey="value"
          fill="#eaeaea"
          isAnimationActive={false}
          stroke=""
        />

        <Pie
          data={data1}
          innerRadius={45}
          outerRadius={70}
          dataKey="value"
          labelLine={false}
          blendStroke
          isAnimationActive={true}
          startAngle={90}
          endAngle={-280}
        >
          <Label value={50} position="center" className="test" />
          <Cell fill={`url(#1)`} />
          <Cell fill="#eaeaea" />
        </Pie>
      </PieChartComponent>
    </div>
  );
};
