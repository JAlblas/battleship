import React from "react";

const GridCell = (props) => {

    return (<div className="cell" onClick={props.handleClick}>
        <p>X</p>
    </div>); 
    
}


export default GridCell;
