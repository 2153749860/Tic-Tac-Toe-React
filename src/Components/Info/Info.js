import React from 'react';

import './Info.css';

export default function Info({ player1, player2, win1, win2 }) {
  return (
    <div className="info-container">
        <p>{player1}  {win1}</p>
        <p>{player2}  {win2}</p>
    </div>
  );
}
