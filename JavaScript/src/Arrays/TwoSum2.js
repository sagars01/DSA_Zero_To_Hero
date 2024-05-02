/**
 * @link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @example Input: numbers = [2,7,11,15], target = 9
            Output: [1,2]
          Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. 
          We return [1, 2].
 * @implements You must write an algorithm with O(log n) runtime complexity.
 * @type Medium
 * @author sagars01
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    if (numbers[start] + numbers[end] === target) return [start + 1, end + 1];
    if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }
  return [];
};

module.exports = twoSum2;
