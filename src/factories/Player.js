import Gameboard from './Gameboard'

const Player = (isHuman, ships, board) => {
    const humanPlayer = isHuman;
    const ownedShips = ships;
    const gameBoard = board;

    const makeTurn = () => {
        if (!humanPlayer) {
            makeRandomMove();   
        }
    }

    const makeRandomMove = () => {
        gameBoard.receiveAttack();
    }

    return {
        humanPlayer,
        makeTurn
    };
}

export default Player;