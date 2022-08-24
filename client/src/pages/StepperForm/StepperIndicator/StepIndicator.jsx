import React from "react";
import { Wrapper } from "./styled";
import { Line } from "../Step/styled";

export const StepIndicator = ({ children }) => {
  console.log(children);

  return (
    <Wrapper>
      {children.map((child) => child)}
      <Line />
    </Wrapper>
  );
};
