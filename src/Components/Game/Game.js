import React, { useState } from "react";

import { Col, Row } from "antd";

import Cell from "../Cell/Cell";

import { gameCheck } from "../../config/gameCheck";

import "./Game.css";

export default function Game({ updateScore }) {
  const [player, setPlayer] = useState("X");

  const [gameBoard, setGameBoard] = useState(new Array(9).fill(""));

  const [endGame, setEndGame] = useState(false);

  const resetGame = () => {
    setGameBoard([...new Array(9).fill("")]);
  };

  const verify = (position, player) => {
    const tmp = [...gameBoard];

    tmp[position] = player;
    setGameBoard([...tmp]);

    const result = gameCheck(tmp, player);

    if (result !== null && result !== undefined) {
      if (result !== "draw") {
        updateScore && updateScore(player);
      }
      setEndGame(true);
      setTimeout(() => {
        resetGame();
        setEndGame(false);
      }, 1000);
    } else {
      setPlayer(player === "X" ? "O" : "X");
      return null;
    }
  };

  return (
    <div className="game-container">
      <Row
        style={{
          minHeight: "200px",
          minWidth: "200px",
          borderRadius: "20px",
        }}
      >
        {gameBoard.map((value, index) => (
          <Col
            key={index}
            span={8}
            style={{
              border: "1px solid black",
              borderTopLeftRadius: index === 0 && "20px",
              borderTopRightRadius: index === 2 && "20px",
              borderBottomLeftRadius: index === 6 && "20px",
              borderBottomRightRadius: index === 8 && "20px",
            }}
          >
            <Cell
              value={value}
              index={index}
              player={player}
              onPlay={verify}
              disabled={value !== "" || endGame}
            />
          </Col>
        ))}
      </Row>

      <p>Player: {player}</p>
    </div>
  );
}
