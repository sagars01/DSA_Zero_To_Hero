/**
 * @link https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @author sagars01
 * @desc find the number using binary search
 *        - Onion peeling technique from the location of the number.
 *            - Move left
 *            - Move right
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function (nums, target) {
 
    
  // #1 Finding the number
    let left = 0;
    let right = nums.length - 1;
    let mid;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        break;
      }
  
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
   if(nums[mid] !== target) return [-1 , -1];
      
    // #2 Onion peeling
  
    left = mid;
    right = mid;
  
    while(left >= 0 || right <= nums.length - 1) {
      if(nums[left - 1] === target) {
        left--;
        continue;
      }
  
      if(nums[right + 1] === target) {
        right++;
        continue;
      }
  
      break;
    }
  
    return [left , right];
  
  };
