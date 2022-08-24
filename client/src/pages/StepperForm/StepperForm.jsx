import React, { useState } from "react";
import { Button } from "antd";
import { StepIndicator } from "./StepperIndicator/StepIndicator";
import { Step } from "./Step/Step";
import { StepOne, StepThree, StepTwo } from "./components";

export const StepperForm = () => {
  const [step, setStep] = useState(1);
  const maxSteps = 3;

  const componentForm = () => {
    switch (step) {
      case 1:
        return <StepOne />;

      case 2:
        return <StepTwo />;

      case 3:
        return <StepThree />;
      default:
        return <StepOne />;
    }
  };
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <h1>StepperForm</h1>
      <StepIndicator currentStep={step}>
        {Array(maxSteps)
          .fill()
          .map((step, index) => (
            <Step label="General info" icon={index + 1} />
          ))}
      </StepIndicator>
      <div
        style={{
          maxWidth: "300px",
          backgroundColor: "#ebeced",
          padding: "10px 20px",
          marginTop: "20px",
        }}
      >
        {componentForm()}

        {step > 1 && (
          <Button onClick={() => setStep((prev) => prev - 1)}>Back</Button>
        )}
        {step !== maxSteps && (
          <Button onClick={() => setStep((prev) => prev + 1)} type="primary">
            Next
          </Button>
        )}
      </div>
    </div>
  );
};
