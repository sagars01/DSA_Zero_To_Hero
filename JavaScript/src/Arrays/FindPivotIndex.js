/**
 * @link https://leetcode.com/problems/find-pivot-index/
 * @author sagars01
 * @description The solution is pretty simple
 *
 * Prefix Sum
 *
 *
 * totalSum  = Calculate the sum of the entire array.
 * leftSum = Sum of the left side of the array, which we will explore in next iteration.
 *
 * Our goal is to find if the leftSum is equal to RIGHTSUM
 *
 * What is RIGHTSUM ?
 * RightSum is equal to totalSum - currentIndexElement(i) - leftsum
 *
 * Think of it this way, if you have to tell me the sum of remaining element then you have to substract the (currentElement + leftSideSum ) with totalSum.
 * So, here we are moving one step forward with ++i to calculate the RIGHTSUM before adding it to the leftSUM
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 *
 */
var pivotIndex = function (nums) {
  let sum = 0;
  let leftsum = 0;
  for (let num of nums) sum += num;

  for (let i = 0; i < nums.length; ++i) {
    if (leftsum === sum - leftsum - nums[i]) return i;
    leftsum += nums[i];
  }

  return -1;
};
