/**
 *
 * @link https://leetcode.com/problems/word-search/
 * @author sagars01
 * @description Use backtracking to search a word in all directions of the current char
 *  terminate if the length of the word === the length of search
 *
 * @requires knowledge of backtracking
 *
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const wordSearch = (board, word) => {
  let result = false;
  const search = (row, col, index) => {
    if (!result) {
      if (row < 0 || col < 0 || row >= board.length || col >= board[0].length)
        return;
      if (board[row][col] !== word[index]) return;

      if (index == word.length - 1) {
        result = true;
        return;
      }  
      board[row][col] = null;

      search(row + 1, col, index + 1);
      search(row - 1, col, index + 1);
      search(row, col - 1, index + 1);
      search(row, col + 1, index + 1);

      board[row][col] = word[index];
    }
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        search(row, col, 0);
        if (result) return true;
      }
    }
  }

  return result;

};

module.exports = wordSearch;
