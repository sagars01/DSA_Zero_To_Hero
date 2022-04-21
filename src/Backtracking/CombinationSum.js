/**
 * 
 * Backtracking Problem on finding combination
 * @link https://leetcode.com/problems/combination-sum/
 * @example We have to find the valid combination (non - repeating)
 * Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
 * 
 * 
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  const d = (combination = [], remainder, index) => {
    if (remainder === 0) {
      result.push(combination);
      return;
    }

    if (remainder < 0) return;

    for (let i = index; i < candidates.length; i++) {
      d([...combination, candidates[i]], remainder - candidates[i], i);
    }
  };

  d([], target, 0);

  return result;
};

module.exports = combinationSum;
