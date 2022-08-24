import React from "react";
import { Container } from "./StepOne";
import { Input } from "antd";

export const StepTwo = ({ stepTwoInput, setStepTwoInput }) => {
  return (
    <Container>
      <label>
        login
        <Input
          value={stepTwoInput}
          onChange={(e) => setStepTwoInput(e.target.value)}
        />
      </label>
    </Container>
  );
};
