/**
 * @link https://leetcode.com/problems/maximum-product-subarray/
 * @example Input: nums = [2,3,-2,4]
            Output: 6
 * @author sagars01
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = Number.NEGATIVE_INFINITY;
  let len = nums.length;

  if (len === 1) return nums[0];

  let product = 1;
  for (let i = 0; i < len; i++) {
    max = Math.max((product *= nums[i]), max);
    if (nums[i] === 0) product = 1;
  }

  product = 1;
  for (let i = len - 1; i > -1; i--) {
    max = Math.max((product *= nums[i]), max);
    if (nums[i] === 0) product = 1;
  }

  return max;
};

module.exports = maxProduct;
