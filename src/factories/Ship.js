const Ship = (length) => {
    let shipLength = length;
    let hits = Array(shipLength).fill(false);
    let sunk = false;

    const hit = (indexHit) => {
        if (indexHit < hits.length) {
            hits[indexHit] = true;
        }
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