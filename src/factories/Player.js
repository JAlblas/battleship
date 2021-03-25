const Player = (isHuman) => {
    const humanPlayer = isHuman;

    const makeTurn = () => {
        if (!humanPlayer) {
            makeRandomMove();
        }
    }

    const makeRandomMove = () => {

    }

    return {
        humanPlayer,
        makeTurn
    };
}

export default Player;