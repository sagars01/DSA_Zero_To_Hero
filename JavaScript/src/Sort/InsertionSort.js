/**
 * @description Sort an array using Insertion Sort.
 * @author sagars01
 *
 */

/**
 *
 * @param {number[]} nums
 */

function insertionSort(nums) {
  const swap = (num1, num2) => {
    let temp = num1;
    num1 = num2;
    num2 = temp;
    return [num1, num2];
  };

  for (let pointer1 = 1; pointer1 < nums.length; pointer1++) {
    let currentNum = nums[pointer1];
    let previousNum = nums[pointer1 - 1];
    let currentIndex = i;
    while(currentIndex >= 0 && currentNum > previousNum) {
      
    }
  }
}

module.exports = insertionSort;
