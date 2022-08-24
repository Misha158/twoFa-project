import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { StepIndicator } from "./StepperIndicator/StepIndicator";
import { Step } from "./Step/Step";
import { StepOne, StepThree, StepTwo } from "./components";
import { useLocation, useNavigate } from "react-router-dom";

const getSessionStorageField = (field) =>
  JSON.parse(sessionStorage.getItem("formStepper"))?.[field];

const getSessionStorageStep = () =>
  JSON.parse(sessionStorage.getItem("currentStep"))?.currentStep;

export const StepperForm = () => {
  const [step, setStep] = useState(getSessionStorageStep() || 1);
  const maxSteps = 3;

  const [login, setLogin] = useState(getSessionStorageField("login"));
  const [password, setPassword] = useState(getSessionStorageField("password"));
  const [stepTwoInput, setStepTwoInput] = useState(
    getSessionStorageField("stepTwoInput")
  );
  const [stepThreeInput, setStepThreeInput] = useState(
    getSessionStorageField("stepThreeInput")
  );

  /*  const navigate = useNavigate();
  const location = useLocation();*/

  const componentForm = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            login={login}
            setLogin={setLogin}
            password={password}
            setPassword={setPassword}
          />
        );

      case 2:
        return (
          <StepTwo
            stepTwoInput={stepTwoInput}
            setStepTwoInput={setStepTwoInput}
          />
        );

      case 3:
        return (
          <StepThree
            stepThreeInput={stepThreeInput}
            setStepThreeInput={setStepThreeInput}
          />
        );
      default:
        return <StepOne />;
    }
  };

  const onNextStep = () => {
    setStep((prev) => prev + 1);
    sessionStorage.setItem(
      "formStepper",
      JSON.stringify({
        login,
        password,
        stepTwoInput,
        stepThreeInput,
      })
    );
  };

  const onPrevStep = () => {
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    sessionStorage.setItem(
      "currentStep",
      JSON.stringify({
        currentStep: step,
      })
    );
  }, [step]);

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <h1>StepperForm</h1>
      <StepIndicator currentStep={step}>
        {Array(maxSteps)
          .fill()
          .map((step, index) => (
            <Step label="General info" icon={index + 1} key={index} />
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

        {step > 1 && <Button onClick={onPrevStep}>Back</Button>}
        {step !== maxSteps && (
          <Button onClick={onNextStep} type="primary">
            Next
          </Button>
        )}
      </div>
    </div>
  );
};
