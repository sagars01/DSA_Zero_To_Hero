/**
 * Given an array of integers return all the permutations of the array numbers.
 * @link https://leetcode.com/problems/permutations/
 * @example Input: nums = [1,2,3]
            Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    
 * @author sagars01
 * @description The idea are straight forward
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const results = [];

  const p = (num, remainder) => {
    if (remainder.length === 0) {
      results.push(num);
      return;
    }

    for (let i = 0; i < remainder.length; i++) {
      p(
        [...num, remainder[i]],
        [...remainder.slice(0, i), ...remainder.slice(i + 1)]
      );
    }
  };

  p([], nums);

  return results;
};
