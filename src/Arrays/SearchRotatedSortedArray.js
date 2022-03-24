/**
 * @link https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @example Input: nums = [4,5,6,7,0,1,2], target = 0
            Output: 4
 * @implements You must write an algorithm with O(log n) runtime complexity.
 * @type Medium
 * @author sagars01
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  if (nums.length === 1 && nums[0] !== target) return -1;
  // [3 , 1  ] 3
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;

    if (nums[start] <= nums[mid]) {
      if (target <= nums[mid] && target >= nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target <= nums[end] && target >= nums[mid]) start = mid + 1;
      else end = mid - 1;
    }
  }

  return -1;
};

module.exports = search;
