import React from "react";
import { Wrapper } from "./styled";
import { Line } from "../Step/styled";

export const StepIndicator = ({ children, currentStep }) => {
  return (
    <Wrapper>
      {children.map((child, index) => {
        if (index + 1 <= currentStep) {
          return (
            <React.Fragment key={index}>
              {React.cloneElement(child, { isActive: true })}
            </React.Fragment>
          );
        }
        return child;
      })}
      <Line />
    </Wrapper>
  );
};
