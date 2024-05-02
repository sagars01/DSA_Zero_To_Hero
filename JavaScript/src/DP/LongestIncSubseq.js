/**
 * @link https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let stack = [Number.MAX_VALUE];

  // Find out if there's any other element in stack which can
  // accomodate the number;

  const findPile = (num) => {
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] >= num) {
        stack[i] = num;
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    const foundPile = findPile(currentElement);
    if (!foundPile) stack.push(currentElement);
  }

  return stack.length;
};
