import React, { useEffect, useState } from "react";
import { Card, Layout } from "../../components";
import { Board, Squad } from "./styled";
import { getWinner } from "./helper";
import { ResultOfGame } from "./ResultOfGame";

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [countStep, setCountStep] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setWinner(getWinner(board));
  }, [xIsNext]);

  const onClick = (index) => {
    const boardCopy = [...board];
    setCountStep((prevCountStep) => prevCountStep + 1);
    if (winner) {
      return;
    }

    boardCopy[index] = xIsNext ? "X" : "0";

    setBoard(boardCopy);
    setXIsNext((prev) => !prev);
  };

  const noWinner = countStep === 9 && !winner;

  return (
    <Layout title="Tic tac toe">
      <Card withSmallPiechart>
        <Board>
          {board.map((square, index) => (
            <Squad key={index} onClick={() => onClick(index)}>
              {square}
            </Squad>
          ))}
        </Board>
        {(winner || noWinner) && (
          <ResultOfGame
            noWinner={noWinner}
            winner={winner}
            setBoard={setBoard}
            setWinner={setWinner}
          />
        )}
      </Card>
    </Layout>
  );
};
