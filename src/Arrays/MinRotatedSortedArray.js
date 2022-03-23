/**
 * @link https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @example Input: nums = [3,4,5,1,2]
            Output: 1
 * @author sagars01           
 * @type Medium
 *            
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  if (!nums) return -1;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[end]) start = mid + 1;
    else end = mid;
  }

  return nums[start];
};

module.exports = findMin;
