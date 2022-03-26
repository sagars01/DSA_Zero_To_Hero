/**
 * @link https://leetcode.com/problems/3sum/
 * @example Input: nums = [-1,0,1,2,-1,-4]
            Output: [[-1,-1,2],[-1,0,1]]
            Explanation: return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
  @description solve two sum - 1 and two sum 2 to fully understand the underlying trick.            
 * @type Medium
 * @author sagars01
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    const current = nums[i];
    let start = i + 1,
      end = nums.length - 1;
    while (start <= end) {
      if (current + nums[start] + nums[end] === 0)
        res.push(current, nums[start], nums[end]);
      else if (current + nums[start] + nums[end] < 0) {
        end -= 1;
      } else {
        start += 1;
      }
    }
  }
  return res;
};

module.exports = threeSum;
