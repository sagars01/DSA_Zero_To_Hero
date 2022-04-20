/**
 * Search if a word exists in an N x N matrix
 * @link https://leetcode.com/problems/word-search/
 * @description Solve using Backtracking.
 * Approach
 *  1. Iterate all the elements of the grid
 *    if the element is equal to Word's first character begin your hunt
 *    else keep going
 * 2. Create a check function which checks
 *    - If the word search is going out of bounds
 *    - If the next character appeared is not equal to the expected character in the word
 *   - If the next character match the expected character return true
 * 3. Similarly continue the same with all the characters in the table
 *
 * @author sagars01
 *
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var wordSearch = function (board, word) {
  let result = false;

  const check = (row, col, index) => {
    if (!result) {
      if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
        return;
      }

      if (board[row][col] !== word[index]) return;
      if (index === word.length - 1) {
        result = true;
        return;
      }

      board[row][col] = null;

      check(row + 1, col, index + 1);
      check(row - 1, col, index + 1);
      check(row, col + 1, index + 1);
      check(row, col - 1, index + 1);

      board[row][col] = word[index];
    }
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        check(row, col, 0);
        if (result) return result;
      }
    }
  }

  return result;
};

module.exports = wordSearch;
