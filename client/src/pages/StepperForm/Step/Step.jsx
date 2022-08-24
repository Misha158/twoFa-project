import React from "react";
import { Circle, WrapperStep, Line } from "./styled";

export const Step = ({ label, icon }) => {
  return (
    <div className="cat" style={{ width: "80px" }}>
      <WrapperStep>
        <div style={{ backgroundColor: "white", padding: "0px 5px" }}>
          <Circle>{icon}</Circle>
        </div>
      </WrapperStep>
      <div style={{ textAlign: "center" }}>{label}</div>
    </div>
  );
};

// <div>{label}</div>
//
