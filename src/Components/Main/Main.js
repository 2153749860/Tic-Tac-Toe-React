import React, { useState } from "react";
import Header from "../Header/Header";
import Game from "../Game/Game";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";

import { Col, Row } from "antd";

import "./Main.css";

export default function Main() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const updateWins = (player) => {
    if (player === "X") {
      setScore1(score1 + 1);
    } else {
      setScore2(score2 + 1);
    }
  };

  return (
    <div>
      <Header />
      <div className="gameContainer">
        <Row style={{ width: "100%" }}>
          <Col xs={24} sm={24} md={15} lg={18}>
            <Game updateScore={updateWins} />
          </Col>
          <Col xs={24} sm={24} md={9} lg={6}>
            <Info
              player1="Player X"
              player2="Player O"
              win1={score1}
              win2={score2}
            />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
