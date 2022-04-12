/**
 * @description returns the row of the triangle on giving the row index
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var f = function (i, j) {
  if (i === 0) return [1];
  const sol = f(i - 1, j - 1) + f(i - 1, j);
};
