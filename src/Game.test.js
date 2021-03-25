import Gameboard from './factories/Gameboard';

it('gameboard grid size', () => {
  expect(Gameboard().grid.length).toEqual(10);
});