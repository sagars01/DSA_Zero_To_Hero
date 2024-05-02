/**
 *
 * @description Perform binary search on a sorted array.
 * @author sagars01
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 */
function BinarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  if (!target) return -1;

  // [1 , 2, 3 ] , 5
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      // Search left
      end = mid - 1;
    } else {
      // Search Right
      start = mid + 1;
    }
  }

  return -1;
}

module.exports = BinarySearch;
