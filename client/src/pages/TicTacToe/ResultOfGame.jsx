import React from "react";
import { Button } from "antd";

export const ResultOfGame = ({
  noWinner,
  winner,
  setBoard,
  setWinner,
  setCountStep,
}) => {
  const onClick = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCountStep(0);
  };

  const result = noWinner ? (
    <strong>No winner</strong>
  ) : (
    <>
      Winner is <strong>{winner}</strong>
    </>
  );

  return (
    <>
      <div style={{ fontSize: "20px", marginTop: "10px" }}>{result}</div>
      <Button onClick={onClick}>Reset</Button>
    </>
  );
};
