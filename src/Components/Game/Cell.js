import React, { useState } from 'react';
// import { Container } from './styles';

export default function Cell() {
  const [marker, setmarker] = useState("-");  

  return (
  <div onClick={() => setmarker("X")}>{ marker }</div>
  );
}
