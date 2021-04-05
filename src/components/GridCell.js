import React from "react";

const GridCell = (props) => {
    const hitShip = props.isShot && props.hasShip;
    const hitMiss = props.isShot;
    if (hitShip) {
      return (
        <div className="cell" id={props.index} onClick={props.handleClick}>
            <p>X</p>
        </div>
      ); 
    } else if (hitMiss) {
      return (
        <div className="cell" id={props.index} onClick={props.handleClick}>
            <p>-</p>
        </div>
      ); 
    } else {
      return (
        <div className="cell" id={props.index} onClick={props.handleClick}>
            <p></p>
        </div>
      ); 
    }

    
}


export default GridCell;
