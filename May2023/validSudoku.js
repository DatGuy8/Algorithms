//    Leetcode 36

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

const board1 = [
  //expected true
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board2 = [
  //expected false
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const isValidSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    let col = new Set();
    let grid = new Set();
    console.log("new i");
    for (let j = 0; j < 9; j++) {
      //how to check each grid
      console.log("i", i, "j", j);
      let gridCheck =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      // console.log(gridCheck);

      //checks rows
      if (board[i][j] != ".") {
        if (row.has(board[i][j])) {
          return false;
        }
        row.add(board[i][j]);
      }
      //checks columns
      if (board[j][i] != ".") {
        if (col.has(board[j][i])) {
          return false;
        }
        col.add(board[j][i]);
      }
      //check grid
      if (gridCheck != ".") {
        console.log(3 * Math.floor(i / 3) + Math.floor(j / 3));
        console.log(3 * (i % 3) + (j % 3));
        console.log("==========================");
        if (grid.has(gridCheck)) {
          return false;
        }
        grid.add(gridCheck);
      }
    }
  }
  return true;
};

console.log(isValidSudoku(board1));
// console.log(isValidSudoku(board2));
