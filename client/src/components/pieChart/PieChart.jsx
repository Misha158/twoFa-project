import React, { useEffect, useState } from "react";
import { PieChart as PieChartComponent, Pie, Label, Cell } from "recharts";
import { getColors, getText } from "./helpers";
import "./style.css";
import { PieContainerStyled } from "./styled";
import { Button } from "antd";

/*const getRandomPieValue = ({ setValue, setData }) => {
  const randomValue = Math.floor(Math.random() * (100 + 1));
  setValue(randomValue);
  const val = 100 - randomValue;
  setData([
    {
      name: "1",
      value: randomValue,
    },
    {
      name: "2",
      value: val,
    },
  ]);
};*/

export const PieChart = () => {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * (100 + 1));

    const val = 100 - randomValue;
    setValue(randomValue);
    setData([
      {
        name: "1",
        value: randomValue,
      },
      {
        name: "2",
        value: val,
      },
    ]);
  }, []);

  const colors = getColors(value);

  return (
    <>
      {/*      <Button
        type="primary"
        onClick={() => getRandomPieValue({ setValue, setData })}
      >
        Change pie
      </Button>*/}
      <h2 style={{ maxWidth: "150px", textAlign: "center" }}>Score</h2>
      <PieContainerStyled text={getText(value)}>
        <PieChartComponent width={150} height={150} className="gradientPie">
          <defs>
            <linearGradient id={"1"}>
              <stop offset={"0%"} stopColor={colors[0]} />
              <stop offset={"100%"} stopColor={colors[1]} />
            </linearGradient>
          </defs>
          <Pie
            data={data}
            innerRadius={45}
            outerRadius={70}
            dataKey="value"
            fill="#eaeaea"
            isAnimationActive={false}
            stroke=""
          />

          <Pie
            data={data}
            innerRadius={45}
            outerRadius={70}
            dataKey="value"
            labelLine={false}
            blendStroke
            isAnimationActive={true}
            startAngle={90}
            endAngle={-280}
          >
            <Label value={value} position="center" className="test" />
            <Cell fill={`url(#1)`} />
            <Cell fill="#eaeaea" />
          </Pie>
        </PieChartComponent>
      </PieContainerStyled>
    </>
  );
};
