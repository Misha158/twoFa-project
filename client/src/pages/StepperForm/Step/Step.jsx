import React from "react";
import { Circle, WrapperStep, Line } from "./styled";

export const Step = ({ label, icon }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <WrapperStep>
          <Circle>{icon}</Circle>
        </WrapperStep>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Line />
        </div>
      </div>
    </>
  );
};

// <div>{label}</div>
