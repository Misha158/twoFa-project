import React from "react";
import { PieChartGradient } from "../charts/pieChartGradient/PieChartGradient";

export const Card = ({ children, title, withSmallPiechart }) => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "beige",
        border: "1px solid skyblue",
        padding: "20px",
        margin: "20px 0",
      }}
    >
      {withSmallPiechart && <PieChartGradient size="small" />}
      <h2>{title}</h2>
      {children}
    </div>
  );
};
