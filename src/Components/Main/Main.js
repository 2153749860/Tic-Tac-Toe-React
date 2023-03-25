import React, { useState } from "react";
import Header from "../Header/Header";
import Game from "../Game/Game";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";

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
    <div className="main-container">
      <Header />
      <Game updateScore={updateWins} />
      <Info player1="player1" player2="player2" win1={score1} win2={score2} />
      <Footer />
    </div>
  );
}
