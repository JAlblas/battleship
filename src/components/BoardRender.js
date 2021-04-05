import React from "react";

import GridCell from './GridCell'

const BoardRender = (props) => {
    const { board, currentPlayer } = props;

    const listItemsEnemy = currentPlayer == 0 ? 
      (board.grid.map((cell, index) =>
        <GridCell index={index} key={index} handleClick={props.makeMove} isShot={cell.isShot} hasShip={cell.hasShip}/>
      ))   : 
      (board.grid.map((cell, index) =>
        <GridCell index={index} key={index} isShot={cell.isShot} hasShip={cell.hasShip}/>
      ));

    return (
      <div className="grid">
          {listItemsEnemy}
      </div>
    ); 
    
}

export default BoardRender;
