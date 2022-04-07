/**
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  if (matrix.length < 1) return matrix;
  let res = [];
  while (matrix.length) {
    const first = matrix.shift();
    res.push(...first);
    // console.log('First', first);
    // Top to Bottom
    for (let i = 0; i < matrix.length; i++) {
      const elem = matrix[i].pop();
      // console.log('TTB', elem);
      if (elem) res.push(elem);
    }

    // Bottom to left
    if (matrix.length !== 0) {
      const bottom = matrix.pop();
      // console.log('BTL', bottom);
      if (bottom) res.push(...bottom.reverse());
    }

    // Bottom to Top
    for (let i = matrix.length - 1; i >= 0; i--) {
      const elem = matrix[i].shift();
      // console.log('BTT', elem);
      if (elem) res.push(elem);
    }
  }
  return res;
};

module.exports = spiralOrder;
