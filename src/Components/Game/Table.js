import React from 'react';
import Cell from './Cell';

// import { Container } from './styles';

export default function Table(props) {
  const player = props;

  return (
    <div>
        <Cell player={player}/>
        <Cell/>
        <Cell/>
    </div>
  );
}
