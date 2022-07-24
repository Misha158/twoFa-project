import React from "react";

export const Card = ({ children, title }) => {
  return (
    <div
      style={{
        backgroundColor: "beige",
        border: "1px solid skyblue",
        padding: "20px",
        margin: "20px 0",
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
};
