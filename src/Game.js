import React from "react";

import './Game.css';

import Gameboard from './factories/Gameboard'
import Player from './factories/Player'
import GridCell from './components/GridCell'

const Game = () => {
    const players = [Player(true), Player(false)];
    let currentplayer = 0;

    let enemyBoard = Gameboard();
    enemyBoard.placeShips();
    enemyBoard.receiveAttack([41]);

    let ownBoard = Gameboard();
    ownBoard.placeShips();
    ownBoard.receiveAttack([25]);
  
    const setupGame = () => {
      
    }

    const makeMove = () => {
      console.log("making move!");
    }
  
    const listItemsEnemy = enemyBoard.grid.map((cell, index) =>
        <GridCell index={index} key={index} handleClick={makeMove}/>
    );

    const listItemsOwn = ownBoard.grid.map((cell, index) =>
      <GridCell index={index} key={index}/>
    );

    return (
        <div className="Game">
          <h1>Battleship</h1>
          <h3>Enemy area</h3>
          <div id="pc-grid" className="grid">{listItemsEnemy}</div>
          <h3>Player area</h3>
          <div id="human-grid" className="grid" ships={ownBoard.ships}>{listItemsOwn}</div>
          
        </div>
    );
}

export default Game;