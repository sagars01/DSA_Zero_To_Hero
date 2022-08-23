/**
 * @description Leetcode-240 : Search a 2D Matrix II
 * @author sagars01
 * @link https://leetcode.com/problems/search-a-2d-matrix-ii/
 * @example This is the tricky implementation of finding a value in a sorted 2D Matrix.
 * Idea: Two Pointers (rowPtr) (colPtr)
 * Initialize row at last row (row.length - 1);
 * Initialize col at first col (row[0].length - 1);
 *
 *  If matrix[row][col] === target return true
 *  If matrix[row][col] greater than target decrease row (row--)
 *  Else increase col (col++)
 *
 * Time complexity - O( n + m ) - because either rows or col can be decremented.
 *
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = matrix.length,
    col = matrix[0].length;
  let rowPtr = row - 1;
  let colPtr = 0;

  while (rowPtr >= 0 && colPtr < col) {
    if (matrix[rowPtr][colPtr] === target) {
      return true;
    } else if (matrix[rowPtr][colPtr] > target) {
      rowPtr--;
    } else {
      colPtr++;
    }
  }

  return false;
};

module.exports = searchMatrix;
