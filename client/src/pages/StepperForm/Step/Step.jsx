import React from "react";
import { Circle, WrapperStep, Line, CircleWrapper } from "./styled";

export const Step = ({ label, icon }) => {
  return (
    <div className="cat" style={{ width: "80px" }}>
      <WrapperStep>
        <CircleWrapper>
          <Circle>{icon}</Circle>
        </CircleWrapper>
      </WrapperStep>
      <div style={{ textAlign: "center" }}>{label}</div>
    </div>
  );
};

// <div>{label}</div>
//
