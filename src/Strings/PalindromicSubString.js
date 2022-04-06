/**
 * @link https://leetcode.com/problems/palindromic-substrings/
 * @example Input: s = "abc"
            Output: 3
            Explanation: Three palindromic strings: "a", "b", "c".
 * @author sagars01
 * 
 * @type medium
 * @description onion peeling
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  let count = 0;
  /**
   * @param {string} s
   * @param {string} left
   * @param {string} right
   * @return {Array}
   */
  const peeler = (s, l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    peeler(s, i, i);
    peeler(s, i, i + 1);
  }
  return count;
};

module.exports = countSubstrings;
