import React from "react";

import GridCell from './GridCell'

const BoardRender = (props) => {
    const { board } = props;
    const listItemsEnemy = board.grid.map((cell, index) =>
        <GridCell index={index} key={index} handleClick={props.makeMove} isShot={cell.isShot} hasShip={cell.hasShip}/>
    );

    const listItemsOwn = board.grid.map((cell, index) =>
      <GridCell index={index} key={index} isShot={cell.isShot} hasShip={cell.hasShip}/>
    );

    return (
      <div className="grid">
          {listItemsEnemy}
      </div>
    ); 
    
}


export default BoardRender;
