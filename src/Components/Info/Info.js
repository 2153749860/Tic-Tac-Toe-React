import React from 'react';

import './Info.css';

export default function Info({ player1, player2, win1, win2 }) {
  return (
    <div className="info-container">
      <div className="card">
      <p>Name: {player1}  </p>
      <p>Score: {win1}</p>
      </div>
      <div className="card">
        <p>Name:{player2} </p>
      <p>Score: {win2}</p>

      </div>
        
    </div>
  );
}
