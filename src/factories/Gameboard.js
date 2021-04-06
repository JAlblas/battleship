const Gameboard = () => {
    const availableAttacks = Array(99 - 0 + 1).fill().map((_, idx) => 0 + idx);

    const ships = [2,3,3,4,5];
    const grid = initializeGrid();

    function initializeGrid() {
        let grid = [];
        for (let i = 0; i < 100; i++) {
          grid.push({hasShip: false, isShot: false})
        }
        return grid;
    }

    function placeShips() {
        ships.forEach(ship => {
            const coordList = [];
            let randomStartCoord = Math.floor(Math.random() * 90);
            coordList.push(randomStartCoord);

            for (let index = 1; index < ship; index++) {
                coordList.push(randomStartCoord + index);  
            }

            for (let index = 0; index < ship; index++) {
                grid[randomStartCoord + index].hasShip = true;  
            }
        });
    }

    const receiveAttack = (moveCoord) => {
        console.log(moveCoord);
        if (grid[moveCoord].isShot === false) {
            grid[moveCoord].isShot = true;
            if (grid[moveCoord].hasShip) {
                console.log("BOOM!");
            }
        }
    }

    const isGameOver = () => {
        return false;
    }

    return {
        availableAttacks,
        ships,
        grid,
        placeShips,
        receiveAttack,
        isGameOver
    };
}

export default Gameboard;