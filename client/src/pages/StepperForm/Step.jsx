import React from "react";

export const Step = ({ label, icon }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
        }}
      >
        {icon}
      </div>
      <div>{label}</div>
    </div>
  );
};
