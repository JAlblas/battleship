import Ship from './Ship'

const Gameboard = () => {
    const missedAttacks = [];
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
            let randomCoord = Math.floor(Math.random() * 100);
            let newShip = Ship(randomCoord);
            grid[randomCoord] = newShip;
        });
        console.log(grid);
    }

    const receiveAttack = (coord) => {
        if (grid[coord] !== "") {
            console.log(grid[coord])
            grid[coord].hasShip = true;
        }
    }

    const isGameOver = () => {
        return false;
    }

    return {
        missedAttacks,
        ships,
        grid,
        placeShips,
        receiveAttack,
        isGameOver
    };
}

export default Gameboard;