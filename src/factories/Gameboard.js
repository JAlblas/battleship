import Ship from './Ship'

const Gameboard = () => {
    const missedAttacks = [];
    const ships = [];
    const grid = initializeGrid();

    function initializeGrid() {
        let grid = [];
        for (let i = 0; i < 10; i++) {
          grid[i] = ["", "", "", "", "", "", "", "", "", ""];
        }
        return grid;
    }

    const placeShip = (coords) => {
        let newShip = Ship(coords);
        coords.forEach(coord => {
            const [x, y] = coord;
            grid[x][y] = newShip;
        });
    }

    const receiveAttack = (coords) => {
        const [x, y] = coords;
        if (grid[x][y] !== "") {
            grid[x][y].hit(coords);
        }
    }

    const isGameOver = () => {
        return false;
    }

    return {
        missedAttacks,
        ships,
        grid,
        placeShip,
        receiveAttack,
        isGameOver
    };
}

export default Gameboard;