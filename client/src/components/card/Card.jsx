import React from "react";

export const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "beige",
        border: "1px solid skyblue",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};
