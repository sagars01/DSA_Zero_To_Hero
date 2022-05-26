/**
 * @link https://leetcode.com/problems/3sum/
 * @example Input: nums = [-1,0,1,2,-1,-4]
            Output: [[-1,-1,2],[-1,0,1]]
            Explanation: return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
  @description solve two sum - 1 and two sum 2 to fully understand the underlying trick.       
  
  Anyway the idea is simple

  You have 3 pointer (i = 0, j = i + 1 )and (k = end of the array) and based on some strategy you are moving the pointers. 
  So 
  1. If values of pointers [i , j , k] === 0 then we found a valid triplet
    a. Push the triplet in a results array.
    b. increase the j pointer;
    c. decrease the k pointer
    d. while the current jPointer's value and the next jPointer's value is same increase jPointer's value, because we don't want to revisit or recompute the same value over and over again.
    e. The above principle is applicable to kPointer as well.

  2. If the sum of [i , j , k ] is less than 0
    a. Decrease the K pointer
  3. Else 
    b. increase the J pointer;
  
 * @type Medium
 * @author sagars01
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];

  if (nums.length < 3) {
    return result;
  }

  nums.sort((a, b) => a - b);

  for (let iPointer = 0; iPointer < nums.length; iPointer++) {
    // jPointer - starts 1 step ahead of iPointer
    // kPointer - starts from the end of the array;
    // You get the range in which you have to traverse.

    if (nums[iPointer] > 0) return result;

    if (iPointer > 0 && nums[iPointer] === nums[iPointer - 1]) continue;

    for (
      let jPointer = iPointer + 1, kPointer = nums.length - 1;
      jPointer < kPointer;

    ) {
      if (nums[iPointer] + nums[jPointer] + nums[kPointer] === 0) {
        result.push([nums[iPointer], nums[jPointer], nums[kPointer]]);

        jPointer++;
        kPointer--;

        while (jPointer < kPointer && nums[jPointer] === nums[jPointer - 1]) {
          jPointer++;
        }
        while (jPointer < kPointer && nums[kPointer] === nums[kPointer + 1]) {
          kPointer--;
        }
      } else if (nums[iPointer] + nums[jPointer] + nums[kPointer] > 0) {
        kPointer--;
      } else {
        jPointer++;
      }
    }
  }

  return result;
};
