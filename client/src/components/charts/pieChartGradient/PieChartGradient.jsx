import React, { useEffect, useMemo, useState } from "react";
import { PieChart as PieChartComponent, Pie, Label, Cell } from "recharts";
import { getColors, getText } from "./helpers";
import "./style.css";
import { PieBackground, PieContainerStyled } from "./styled";
import { Button, Grid } from "antd";

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

export const PieChartGradient = ({ title, initialValue, size = "normal" }) => {
  const [value, setValue] = useState(initialValue || null);
  const [data, setData] = useState(null);
  const randomValue = Math.floor(Math.random() * (100 + 1));
  const { useBreakpoint } = Grid;
  const { lg } = useBreakpoint();

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
    <div
      style={{
        position: "relative",
        width: size !== "small" ? "250px" : "",
        margin: !lg && "0 auto",
      }}
    >
      {/*      <Button
        type="primary"
        onClick={() => getRandomPieValue({ setValue, setData })}
      >
        Change pie
      </Button>*/}

      {title && (
        <h2
          style={{
            maxWidth: size === "normal" ? "250px" : "75px",
            textAlign: "center",
          }}
        >
          Score
        </h2>
      )}
      <PieBackground size={size} />
      <PieContainerStyled
        text={size === "normal" ? getText(value) : null}
        size={size}
      >
        <PieChartComponent
          width={size === "normal" ? 250 : 75}
          height={size === "normal" ? 250 : 75}
          className="gradientPie"
        >
          <defs>
            <linearGradient id={randomValue}>
              <stop offset={"0%"} stopColor={colors?.[0]} />
              <stop offset={"100%"} stopColor={colors?.[1]} />
            </linearGradient>
          </defs>
          <Pie
            data={data}
            innerRadius={size === "normal" ? 55 : 20}
            outerRadius={size === "normal" ? 100 : 35}
            dataKey="value"
            fill="#eaeaea"
            isAnimationActive={false}
            stroke=""
          />

          <Pie
            data={data}
            innerRadius={size === "normal" ? 55 : 20}
            outerRadius={size === "normal" ? 100 : 35}
            dataKey="value"
            labelLine={false}
            blendStroke
            isAnimationActive={true}
            startAngle={90}
            endAngle={-280}
          >
            <Label
              value={value}
              position="center"
              className={`pie-chart-label ${
                size === "normal" ? "normalPiechart" : "smallPiechart"
              }`}
            />
            <Cell fill={`url(#${randomValue})`} />
            <Cell fill="#eaeaea" />
          </Pie>
        </PieChartComponent>
      </PieContainerStyled>
    </div>
  );
};
