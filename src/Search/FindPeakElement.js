/**
 * @link https://leetcode.com/problems/find-peak-element/
 * @author sagars01
 * @desc reach the middle
 *        - Check if the mid - 1 (left) and mid + 1 (right)
 *        - Move towards whichever is greater (left) or (right)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
      continue;
    }

    if (nums[mid] < nums[mid - 1]) {
      right = mid - 1;
      continue;
    }

    return mid;
  }
};
