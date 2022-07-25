import React from "react";

export const Column = ({ children }) => {
  return (
    <td
      style={{
        minWidth: "100px",
        maxWidth: "100px",
        height: "25px",
        border: "1px solid #777",
      }}
    >
      {children}
    </td>
  );
};
