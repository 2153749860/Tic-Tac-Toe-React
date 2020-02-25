import React, { useState } from 'react';

import './Game.css';

import Table from './Table/Table';

export default function Game() {
  const [player, setPlayer] = useState(0);

  function changePlayer(){
    if(player === 0){
      setPlayer(1)
    } else {
      setPlayer(0);
    }
  }

  return (
    <div className="game-container">
        <Table player={player}/>
        <button onClick={changePlayer}>Change Player</button>
        <p>Player: {player}</p>
    </div>
  );
}
