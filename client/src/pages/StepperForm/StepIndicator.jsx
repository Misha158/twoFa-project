import React from "react";

export const StepIndicator = ({ children }) => {
  console.log(children);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {children.map((child) => child)}
    </div>
  );
};
