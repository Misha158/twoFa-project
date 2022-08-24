import React from "react";
import { Wrapper } from "./styled";

export const StepIndicator = ({ children }) => {
  console.log(children);

  return <Wrapper>{children.map((child) => child)}</Wrapper>;
};
