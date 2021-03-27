import React, { useState, useEffect } from "react";

import './Game.css';

import Gameboard from './factories/Gameboard'
import Player from './factories/Player'
import BoardRender from './components/BoardRender'

const Game = () => {
    const players = [Player(true), Player(false)];
    const [currentplayer, setCurrentPlayer] = useState(0);
    const [enemyBoard, setEnemyBoard] = useState(Gameboard());
    const [ownBoard, setOwnBoard] = useState(Gameboard());

    useEffect( () => {
      if (!players[currentplayer].humanPlayer) {
        setTimeout(function () {
          let index = Math.floor(Math.random(0, 1) * 100);
          makeAImove(index);
        }, 1000);
      }; 
    },
    [currentplayer],
    )

    useEffect( () => {
      enemyBoard.placeShips();
      ownBoard.placeShips();
    })

    const setupGame = () => {
      
    }

    const makeMove = (e) => {
      console.log("making move!");
      enemyBoard.receiveAttack(e.target.id);
      currentplayer === 0 ? setCurrentPlayer(1) : setCurrentPlayer(0);
    }

    const makeAImove = (index) => {
      console.log("making AI move!");
      console.log(index);
      ownBoard.receiveAttack(index);
      currentplayer === 0 ? setCurrentPlayer(1) : setCurrentPlayer(0);
    }

    return (
        <div className="Game">
          <h1>Battleship</h1>
          <h3>Enemy area</h3>
          <BoardRender board={enemyBoard} makeMove={makeMove}/>
          <h3>Player area</h3>
          <BoardRender board={ownBoard}/>
        </div>
    );
}

export default Game;