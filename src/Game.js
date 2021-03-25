import React from "react";

import './Game.css';

import Gameboard from './factories/Gameboard'
import Player from './factories/Player'
import GridCell from './components/GridCell'

const Game = () => {
    const players = [Player(true), Player(false)];
    let currentplayer = 0;

    let board = Gameboard();
    board.placeShip([[4,8], [4,9]]);
    board.receiveAttack([4,8]);
  
    const makeMove = () => {
      console.log("making move!");
    }
  
    const listItemsEnemy = board.grid.map((cell) =>
      cell.map((outerCell) =>
        <GridCell handleClick={makeMove}/>
      )
    );

    const listItemsOwn = board.grid.map((cell) =>
    cell.map((outerCell) =>
      <GridCell/>
    )
  );

    


    return (
        <div className="Game">
          <h1>Battleship</h1>
          <h3>Enemy area</h3>
          <div id="pc-grid" className="grid">{listItemsEnemy}</div>
          <h3>Player area</h3>
          <div id="human-grid" className="grid">{listItemsOwn}</div>
          
        </div>
    );
}

export default Game;