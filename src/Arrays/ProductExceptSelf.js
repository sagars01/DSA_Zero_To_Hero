/**
 * @link https://leetcode.com/problems/product-of-array-except-self/
 * @example Input: nums = [1,2,3,4]
            Output: [24,12,8,6]
 * @description You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * @extends find a way to optimize this code to get 90%+ run time;
 */
var productExceptSelf = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return [];
  let result = [];
  let prefix = 1;

  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    let prefixProduct = prefix * nums[i - 1];
    result[i] = prefixProduct;
    prefix = prefixProduct;
  }

  let suffix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= suffix;
    suffix *= nums[j];
  }

  return result;
};

module.exports = productExceptSelf;
