/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * @link https://leetcode.com/problems/subsets/
 * @example Below are some examples to visualize
 * Input: nums = [1,2,3]
  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
  @description Its like generating all the combination but in a forward fashion. 
    - Loop through the array of nums 
    - Push every combination from the current index as recursion
    - Repeat till end of array. 
  Basically Backtracking.
 * @author sagars01
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];

  const d = (combination, index) => {
    result.push(combination);
    for (let i = index; i < nums.length; i++) {
      d([...combination, nums[i]], i + 1);
    }
  };

  d([], 0);

  return result;
};

module.exports = subsets;
