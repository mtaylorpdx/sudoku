import { GameBoard } from './../src/gameboard.js';

describe ('GameBoard', () => {
  var gameBoard;

  beforeEach(() => {
    gameBoard = new GameBoard();
  });

  test('should correctly enter a number in array', () => {
    expect(gameBoard.row1[0]).toEqual(1);
  });

  test('should return true if number already exists in same array', () => {
    expect(gameBoard.rowCheck(gameBoard.row1, 1)).toEqual(true);
  });

  test('should return true if number already exists in same index position in any row', () => {
    expect(gameBoard.columnCheck(0, 1)).toEqual(true);
  });
});
