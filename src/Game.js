import React, { useState, useEffect } from "react";

import './Game.css';

import Gameboard from './factories/Gameboard'
import Player from './factories/Player'
import GridCell from './components/GridCell'
import BoardRender from './components/BoardRender'

const Game = () => {
    const players = [Player(true), Player(false)];
    const [currentplayer, setCurrentPlayer] = useState(0);
    const enemyBoard = Gameboard();
    const ownBoard = Gameboard();

    useEffect( () => {
      if (!players[currentplayer].humanPlayer) {
        console.log("PC MOVE START");
        setTimeout(function () {
          console.log("PC MODE MADE")
        }, 1000);
      }; 
    },
    [currentplayer],
    )

    useEffect( () => {
      enemyBoard.placeShips();
      enemyBoard.receiveAttack([41]);

      ownBoard.placeShips();
      ownBoard.receiveAttack([25]);
    })

    const setupGame = () => {
      
    }

    const makeMove = () => {
      console.log("making move!");
      currentplayer === 0 ? setCurrentPlayer(1) : setCurrentPlayer(0);
    }

    return (
        <div className="Game">
          <h1>Battleship</h1>
          <h3>Enemy area</h3>
          <BoardRender board={enemyBoard} makeMove={makeMove}/>
          <div id="pc-grid" className="grid"></div>
          <h3>Player area</h3>
          <BoardRender board={ownBoard} makeMove={makeMove}/>
          <div id="human-grid" className="grid" ships={ownBoard.ships}></div>
        </div>
    );
}

export default Game;