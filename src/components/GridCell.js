import React from "react";

const GridCell = (props) => {
    const hitShip = props.isShot && props.hasShip;
    const hitMiss = props.isShot;
    return (
      <div className="cell" id={props.index} onClick={props.handleClick}>
          <p>{props.isShot ? "X" : ""}</p>
      </div>
    ); 
    
}


export default GridCell;
