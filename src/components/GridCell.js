import React from "react";

const GridCell = (props) => {
    return (
      <div className="cell" onClick={props.handleClick}>
          <p>{props.cell}</p>
      </div>
    ); 
    
}


export default GridCell;
