/**
 * @description implementation of merge sort using top down approach
 *
 */

/**
 *
 * @param {Array} left
 * @param {Array} right
 * @returns {Array}
 */

const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    arr.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...arr, ...left, ...right];
};

/**
 * @param {Array} input
 * @return {Array}
 *
 */
const mergeSort = (input) => {
  const pivot = input.length / 2;
  if (input.length < 2) return input;

  const left = input.splice(0, pivot);

  return merge(mergeSort(left), mergeSort(input));
};

module.exports = mergeSort;
