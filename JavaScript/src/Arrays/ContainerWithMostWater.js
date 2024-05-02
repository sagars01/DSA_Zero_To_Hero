/**
 * @link https://leetcode.com/problems/container-with-most-water/
 * @example Input: height = [1,1]
            Output: 1
 * @implements You must write an algorithm with O(n) runtime complexity.
 * @type Medium
 * @author sagars01
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0,
    end = height.length - 1;
  let maxContainerArea = 0;

  while (start < end) {
    let areaOfContainer = Math.min(height[start], height[end]) * (end - start);
    maxContainerArea = Math.max(areaOfContainer, maxContainerArea);

    if (height[start] === 0) {
      start += 1;
    }

    if (height[end] === 0) {
      end -= 1;
    }

    if (height[start] <= height[end]) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  return maxContainerArea;
};

module.exports = maxArea;
