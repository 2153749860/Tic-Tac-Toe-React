import React, { useEffect, useState } from 'react';

import './Game.css';

import Table from './Table/Table';

export default function Game() {
  const [player, setPlayer] = useState("X");

  const [marker1, setMarker1 ] = useState("-");
  const [marker2, setMarker2 ] = useState("-");
  const [marker3, setMarker3 ] = useState("-");
  const [marker4, setMarker4 ] = useState("-");
  const [marker5, setMarker5 ] = useState("-");
  const [marker6, setMarker6 ] = useState("-");
  const [marker7, setMarker7 ] = useState("-");
  const [marker8, setMarker8 ] = useState("-");
  const [marker9, setMarker9 ] = useState("-");

  return (
    <div className="game-container">
        <table>
          <tr>
            <td>
              <button onClick={() => {
                if (marker1 === '-') {
                  setMarker1(player)
                  if (player === 'X') {
                    setPlayer('O')
                  } else {
                    setPlayer('X') 
                  }
                }
              }}>{marker1}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker2 === '-') {
                  setMarker2(player)
                  if (player === 'X') {
                    setPlayer('O')
                  } else {
                    setPlayer('X')
                  }
                }
              }}>{marker2}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker3 === '-') {
                  setMarker3(player)
                  if (player === 'X') {
                    setPlayer('O')
                  } else {
                    setPlayer('X')
                  }
                }
              }}>{marker3}</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => {
                if (marker4 === '-') {
                  setMarker4(player)
                  if (player === 'X') {
                    setPlayer('O')
                  } else {
                    setPlayer('X')
                  }
                }
              }}>{marker4}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker5 === '-') {
                  setMarker5(player)
                  if (player === 'X') {
                    setPlayer('O')
                  } else {
                    setPlayer('X')
                  }
                }
              }}>{marker5}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker6 === '-') {
                  setMarker6(player)
                  if (player === 'X') {
                    setPlayer('O')
                  } else {
                    setPlayer('X')
                  }
                }
              }}>{marker6}</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => {
                if (marker7 === '-') {
                  setMarker7(player)
                  if (player === 'X') {
                    setPlayer('O')
                  } else {
                    setPlayer('X')
                  }
                }
              }}>{marker7}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker8 === '-') {
                  setMarker8(player)
                  if (player === 'X') {
                    setPlayer('O')
                  } else {
                    setPlayer('X')
                  }
                }
              }}>{marker8}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker9 === '-') {
                  setMarker9(player)
                  if (player === 'X') {
                    setPlayer('O')
                  } else {
                    setPlayer('X')
                  }
                }
              }}>{marker9}</button>
            </td>
          </tr>
        </table>
        <p>Player: {player}</p>
    </div>
  );
}
