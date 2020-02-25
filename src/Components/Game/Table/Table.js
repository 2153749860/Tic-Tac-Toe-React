import React from 'react';
import Cell from '../Cell/Cell';

import './Table.css';

export default function Table(props) {
  //const player = props;

  return (
    <div className="table-container">
      <div className="first-row">
        <Cell player={props.player}/>
        <Cell player={props.player}/>
        <Cell player={props.player}/>
      </div>
      <div className="second-row">
        <Cell player={props.player}/>
        <Cell player={props.player}/>
        <Cell player={props.player}/>
      </div>
      <div className="third-row">
        <Cell player={props.player}/>
        <Cell player={props.player}/>
        <Cell player={props.player}/>
      </div>
    </div>
  );
}
