import React, { useState } from "react";
import { Button } from "antd";
import { StepIndicator } from "./StepIndicator";
import { Step } from "./Step";

export const StepperForm = () => {
  const [step, setStep] = useState(1);

  const componentForm = () => {
    switch (step) {
      case 1:
        return <div>hello 1</div>;

      case 2:
        return <div>hello 2</div>;

      case 3:
        return <div>hello 3</div>;
      default:
        return <div>Default</div>;
    }
  };
  return (
    <div>
      <h1>StepperForm</h1>
      <StepIndicator>
        <Step label="General info" icon="1" />
        <Step label="Company info" icon="2" />
        <Step label="Finish " icon="3" />
      </StepIndicator>
      {/*      <div>{componentForm()}</div>
      <div style={{ display: "flex" }}>
        <Button onClick={() => setStep((prev) => prev - 1)}>Back</Button>
        <Button onClick={() => setStep((prev) => prev + 1)}>Next</Button>
      </div>*/}
    </div>
  );
};
