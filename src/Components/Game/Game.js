import React, { useState } from 'react';

import './Game.css';

import Table from './Table';

export default function Game() {
  const player = 1;

  return (
    <div className="game-container">
        <Table player={player}/>
    </div>
  );
}

/*
<tr>
                <td onClick={movePlayer}>{move[0]}</td>
                <td onClick={movePlayer}>{move[1]}</td>
                <td onClick={movePlayer}>{move[2]}</td>
            </tr>
            <tr>
                <td onClick={movePlayer}>{move[3]}</td>
                <td onClick={movePlayer}>{move[4]}</td>
                <td onClick={movePlayer}>{move[5]}</td>
            </tr>
            <tr>
                <td onClick={movePlayer}>{move[6]}</td>
                <td onClick={movePlayer}>{move[7]}</td>
                <td onClick={movePlayer}>{move[8]}</td>
            </tr>
*/