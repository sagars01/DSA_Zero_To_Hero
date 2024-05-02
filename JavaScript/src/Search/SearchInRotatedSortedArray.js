/**
 * @link https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @author sagars01
 * @desc The algorithm works as follows
 * - Declare two pointers left (0) and right (array.length - 1);
 * - Calculate mid (Math.floor(left + right)/2);
 * - Loop through the array while left <= right
 *  - If mid element is greater than left element then the left side is sorted
 *      - Continue search of the target in left side but check
 *          - if target is between left elem and mid elem
 *              - true: end becomes mid - 1;
 *              - false: no point searching here, search on the right side.
 *  - Else right side is sorted
 *      - Continue search on the right side but
 *        - if target is between right elem and mid elem
 *          - true: start become mid + 1
 *          - false: end becomes mid - 1, because no point searching here.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  if (nums.length === 1 && nums[0] !== target) return -1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[right] >= target && nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
