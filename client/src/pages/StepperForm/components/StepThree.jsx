import React from "react";
import { Input } from "antd";
import { Container } from "./StepOne";

export const StepThree = ({ stepThreeInput, setStepThreeInput }) => {
  return (
    <Container>
      <label>
        login
        <Input
          value={stepThreeInput}
          onChange={(e) => setStepThreeInput(e.target.value)}
        />
      </label>
    </Container>
  );
};
