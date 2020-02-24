import React from 'react';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';

import './Main.css';

export default function Main() {
  return (
    <div className="main-container">
        <Header/>
        <Game/>
        <Info/>
        <Footer/>
    </div>
  );
}
