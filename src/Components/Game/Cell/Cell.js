import React, { useState } from 'react';

import './Cell.css';

export default function Cell(props) {
  const [marker, setMarker] = useState("-");  
  
  function play(){
    if(props.player === 0){
      setMarker("X");
    } else {
      setMarker("O");
    }
  }

  return (
  <div className="cell-container" onClick={play}>{ marker }</div>
  );
}
