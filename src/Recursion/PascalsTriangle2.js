/**
 * @description returns the row of the triangle on giving the row index
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const pascalsTriangle = (rowIndex) => {
  // This implementation is quadratic time and should be avoided at all cost.
  const getNums = (row, col) => {
    if (row === 0 || col === 0 || row === col) return 1;

    return getNums(row - 1, col - 1) + getNums(row - 1, col);
  };

  let pascal = [];
  for (let i = 0; i <= numRows; i++) {
    pascal.push(getNums(rowIndex, i));
  }

  return pascal;
};

/**
 * @description time optimized solution O(n)
 * @link https://leetcode.com/problems/pascals-triangle-ii/discuss/1203260/Very-easy-O(N)-time.-0-ms-beats-100-(simple-maths)-ALL-LANGUAGES
 *
 * Brilliant Solution by the user
 *
 */

const pascalTriangleOptimized = (rowIndex) => {
  let pascal = [1];
  let temp = 1;

  for (let i = 1; i <= rowIndex; i++) {
    temp = (temp * (rowIndex - i)) / i;
    pascal.push(temp);
  }

  return temp;
};

module.exports = {
  pascalsTriangle,
  pascalTriangleOptimized,
};
