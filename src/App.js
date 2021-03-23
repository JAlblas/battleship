import './App.css';

import Ship from './factories/Ship'

function App() {

  let ship = Ship(5);
  console.log(ship);

  return (
    <div className="App">
      <h1>Battleship</h1>
    </div>
  );
}

export default App;
