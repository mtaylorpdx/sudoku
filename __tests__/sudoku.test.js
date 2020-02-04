import { GameBoard } from './../src/gameboard.js';

describe ('GameBoard', () => {

  test('should correctly enter a number in array', () => {
    var gameBoard = new GameBoard();
    expect(gameBoard.row1[0]).toEqual(1);
  });
});