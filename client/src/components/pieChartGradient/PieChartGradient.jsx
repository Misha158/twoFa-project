import React, { useEffect, useMemo, useState } from "react";
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

export const PieChartGradient = ({ title, initialValue }) => {
  const [value, setValue] = useState(initialValue || null);
  const [data, setData] = useState(null);
  const randomValue = Math.floor(Math.random() * (100 + 1));

  const colors = getColors(value);

  useEffect(() => {
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

  return (
    <>
      {/*      <Button
        type="primary"
        onClick={() => getRandomPieValue({ setValue, setData })}
      >
        Change pie
      </Button>*/}

      {title && (
        <h2 style={{ maxWidth: "250px", textAlign: "center" }}>Score</h2>
      )}
      <PieContainerStyled text={getText(value)}>
        <PieChartComponent width={250} height={250} className="gradientPie">
          <defs>
            <linearGradient id={randomValue}>
              <stop offset={"0%"} stopColor={colors?.[0]} />
              <stop offset={"100%"} stopColor={colors?.[1]} />
            </linearGradient>
          </defs>
          <Pie
            data={data}
            innerRadius={55}
            outerRadius={100}
            dataKey="value"
            fill="#eaeaea"
            isAnimationActive={false}
            stroke=""
          />

          <Pie
            data={data}
            innerRadius={55}
            outerRadius={100}
            dataKey="value"
            labelLine={false}
            blendStroke
            isAnimationActive={true}
            startAngle={90}
            endAngle={-280}
          >
            <Label value={value} position="center" className="test" />
            <Cell fill={`url(#${randomValue})`} />
            <Cell fill="#eaeaea" />
          </Pie>
        </PieChartComponent>
      </PieContainerStyled>
    </>
  );
};
