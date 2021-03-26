const Ship = (coordList) => {
    let shipLength = coordList.length;
    let hits = Array(shipLength).fill(false);
    let sunk = false;

    const hit = (coord) => {
        hits.push(coord);
     }
    
     const isSunk = () => {
        return hits.every(function (e) {
            return e === true;
        });
     }

    return {
        shipLength,
        hits,
        sunk,
        hit,
        isSunk
    };
}

export default Ship;