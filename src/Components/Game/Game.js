import React, { useEffect, useState } from 'react';

import './Game.css';

import Table from './Table/Table';

export default function Game(props) {
  const [player, setPlayer] = useState("X");
  var endGame = false;
  function updateWin1(){
    props.score1();
  }

  function updateWin2(){
    props.score2();
  }

  var [marker1, setMarker1 ] = useState("-");
  var [marker2, setMarker2 ] = useState("-");
  var [marker3, setMarker3 ] = useState("-");
  var [marker4, setMarker4 ] = useState("-");
  var [marker5, setMarker5 ] = useState("-");
  var [marker6, setMarker6 ] = useState("-");
  var [marker7, setMarker7 ] = useState("-");
  var [marker8, setMarker8 ] = useState("-");
  var [marker9, setMarker9 ] = useState("-");

  function verify(){
    if(marker1 === marker2 && marker1 === marker3 && marker1 !== '-'){
      console.log('twat')
      if(player === 'O') {
        updateWin2();
        endGame = true; 
      }
      if (player ==='X') {
        console.log('twat2')
        updateWin1();
        endGame = true;    
      } 
      
    } else if(marker4 === marker5 && marker4 === marker6 && marker4 !== '-'){
      if (player==='X') {
        updateWin1();
        endGame = true;     
      } else {
        updateWin2();
        endGame = true; 
      }
    } else if(marker7 === marker8 && marker7 === marker9 && marker7 !== '-'){
      if (player==='X') {
        updateWin1();
        endGame = true;     
      } else {
        updateWin2();
        endGame = true; 
      }
    } else if(marker1 === marker4 && marker1 === marker7 && marker1 !== '-'){
      if (player==='X') {
        updateWin1();
        endGame = true;     
      } else {
        updateWin2();
        endGame = true; 
      }
    } else if(marker2 === marker5 && marker2 === marker8 && marker2 !== '-'){
      if (player==='X') {
        updateWin1();
        endGame = true;     
      } else {
        updateWin2();
        endGame = true; 
      }
    } else if(marker3 === marker6 && marker3 === marker9 && marker3 !== '-'){
      if (player==='X') {
        updateWin1();
        endGame = true;     
      } else {
        updateWin2();
        endGame = true; 
      }
    } else if(marker1 === marker5 && marker1 === marker9 && marker1 !== '-'){
      if (player==='X') {
        updateWin1();
        endGame = true;     
      } else {
        updateWin2();
        endGame = true; 
      }
    } else if(marker3 === marker5 && marker3 === marker7 && marker3 !== '-'){
      if (player==='X') {
        updateWin1();
        endGame = true;     
      } else {
        updateWin2();
        endGame = true; 
      }
    }
  }

  return (
    <div className="game-container">
        <table>
          <tr>
            <td>
              <button onClick={() => {
                if (marker1 === '-') {
                  marker1=player;
                  setMarker1(player);
                  if (marker1!=='-') {
                    verify();
                  }
                  if(endGame === false){
                    if (player === 'X') {
                      setPlayer('O')
                    } else {
                      setPlayer('X') 
                    }
                  }
                }
              }}>{marker1}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker2 === '-') {
                  marker2=player;
                  setMarker2(player);
                  if (marker2!=='-') {
                    verify();
                  }
                  if(endGame === false){
                    if (player === 'X') {
                      setPlayer('O')
                    } else {
                      setPlayer('X') 
                    }
                  }
                }
              }}>{marker2}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker3 === '-') {
                  marker3=player;
                  setMarker3(player);
                  if (marker3!=='-') {
                    verify();
                  }
                  if(endGame === false){
                    if (player === 'X') {
                      setPlayer('O')
                    } else {
                      setPlayer('X') 
                    }
                  }
                }
              }}>{marker3}</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => {
                if (marker4 === '-') {
                  marker4=player;
                  setMarker4(player);
                  if (marker4!=='-') {
                    verify();
                  }
                  if(endGame === false){
                    if (player === 'X') {
                      setPlayer('O')
                    } else {
                      setPlayer('X') 
                    }
                  }
                }
              }}>{marker4}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker5 === '-') {
                  marker5=player;
                  setMarker5(player);
                  if (marker5!=='-') {
                    verify();
                  }
                  if(endGame === false){
                    if (player === 'X') {
                      setPlayer('O')
                    } else {
                      setPlayer('X') 
                    }
                  }
                }
              }}>{marker5}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker6 === '-') {
                  marker6=player;
                  setMarker6(player);
                  if (marker6!=='-') {
                    verify();
                  }
                  if(endGame === false){
                    if (player === 'X') {
                      setPlayer('O')
                    } else {
                      setPlayer('X') 
                    }
                  }
                }
              }}>{marker6}</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => {
                if (marker7 === '-') {
                  marker7=player;
                  setMarker7(player);
                  if (marker7!=='-') {
                    verify();
                  }
                  if(endGame === false){
                    if (player === 'X') {
                      setPlayer('O')
                    } else {
                      setPlayer('X') 
                    }
                  }
                }
              }}>{marker7}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker8 === '-') {
                  marker8=player;
                  setMarker8(player);
                  if (marker8!=='-') {
                    verify();
                  }
                  if(endGame === false){
                    if (player === 'X') {
                      setPlayer('O')
                    } else {
                      setPlayer('X') 
                    }
                  }
                }
              }}>{marker8}</button>
            </td>
            <td>
              <button onClick={() => {
                if (marker9 === '-') {
                  marker9=player;
                  setMarker9(player);
                  if (marker9!=='-') {
                    verify();
                  }
                  if(endGame === false){
                    if (player === 'X') {
                      setPlayer('O')
                    } else {
                      setPlayer('X') 
                    }
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
