/**
 * @link https://leetcode.com/problems/valid-parentheses/
 * @example Input: s = "()"
            Output: true
            Input: s = "(]"
            Output: false
 * @implements You must write an algorithm with O(n) runtime complexity.
 * @type Easy, String
 * @author sagars01
 * @description this is an unoptimized solution.
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let i = 0;
  let set = new Set(['()', '{}', '[]']);
  while (i < s.length) {
    if (stack.length === 0) {
      stack.push(s[i]);
    } else {
      const fullString = stack[stack.length - 1] + s[i];
      if (set.has(fullString)) stack.pop();
      else stack.push(s[i]);
    }

    i++;
  }

  return stack.length === 0;
};

module.exports = isValid;
