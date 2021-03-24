import './App.css';

import Ship from './factories/Ship'
import Gameboard from './factories/Gameboard'

function App() {

  let board = Gameboard();
  board.placeShip([[4,8], [4,9]]);
  board.receiveAttack([4,8]);
  console.log(board);

  return (
    <div className="App">
      <h1>Battleship</h1>
    </div>
  );
}

export default App;
