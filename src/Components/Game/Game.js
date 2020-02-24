import React, { useState } from 'react';

import './Game.css';

export default function Game() {
  const [move, setMove] = useState("-");

  var markers = ["-", "-", "-", "-", "-", "-", "-", "-", "-",];

  function movePlayer(position) {
      if(move === "-"){
          setMove("X");
      }
      console.log(move);
  }


  return (
    <div className="game-container">
        <table>
            <tr>
                <td onClick={movePlayer}>{markers[0]}</td>
                <td onClick={movePlayer}>{markers[1]}</td>
                <td onClick={movePlayer}>{markers[2]}</td>
            </tr>
            <tr>
                <td onClick={movePlayer}>{markers[3]}</td>
                <td onClick={movePlayer}>{markers[4]}</td>
                <td onClick={movePlayer}>{markers[5]}</td>
            </tr>
            <tr>
                <td onClick={movePlayer}>{markers[6]}</td>
                <td onClick={movePlayer}>{markers[7]}</td>
                <td onClick={movePlayer}>{markers[8]}</td>
            </tr>
        </table>
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