import React, { useEffect, useState } from "react";
import "./style.css";
import { BoardComponent } from "./components/BoardComponent";
import { Card, Layout } from "../../components";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { colors } from "./models/Colors";
import { LostFigures } from "./components/LostFigures";

export const Chess = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === colors.WHITE ? blackPlayer : whitePlayer
    );
  }
  return (
    <Layout>
      <Card>
        <BoardComponent
          board={board}
          setBoard={setBoard}
          swapPlayer={swapPlayer}
          currentPlayer={currentPlayer}
        />
        <div>
          <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
          <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
        </div>
      </Card>
    </Layout>
  );
};
