const Ship = (coordsList) => {
    let shipLength = coordsList.length;
    let hits = Array(shipLength).fill(false);
    let sunk = false;

    const hit = (coords) => {
        hits.push(coords);
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