/**
 * @link https://leetcode.com/problems/product-of-array-except-self/
 * @example Input: nums = [1,2,3,4]
            Output: [24,12,8,6]
 * @description You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (nums.length === 0 || !Array.isArray(nums)) return [];

  return nums;
};

module.exports = productExceptSelf;
