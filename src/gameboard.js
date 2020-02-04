export function GameBoard() {
  this.row1 = [1, "", "", "", "", "", "", "", ""];
  this.row2 = ["", "", "", "", "", "", "", "", ""];
  this.row3 = ["", "", "", "", "", "", "", "", ""];
  this.row4 = ["", "", "", "", "", "", "", "", ""];
  this.row5 = ["", "", "", "", "", "", "", "", ""];
  this.row6 = ["", "", "", "", "", "", "", "", ""];
  this.row7 = ["", "", "", "", "", "", "", "", ""];
  this.row8 = ["", "", "", "", "", "", "", "", ""];
  this.row9 = ["", "", "", "", "", "", "", "", ""];
}

GameBoard.prototype.rowCheck = function(array, userInput) {
  if (array.includes(userInput)) {
    return true;
  }
};

GameBoard.prototype.columnCheck = function(i, userInput) {

};