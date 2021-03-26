import React from "react";

import GridCell from './GridCell'

const BoardRender = (props) => {
    const { board } = props;
    const listItemsEnemy = board.grid.map((cell, index) =>
        <GridCell index={index} key={index} handleClick={props.makeMove}/>
    );

    const listItemsOwn = board.grid.map((cell, index) =>
      <GridCell index={index} key={index}/>
    );

    return (
      <div className="grid">
          {listItemsEnemy}
      </div>
    ); 
    
}


export default BoardRender;
