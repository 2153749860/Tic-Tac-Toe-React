import React, { useState } from 'react';
// import { Container } from './styles';

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
  <div onClick={play}>{ marker }</div>
  );
}
