/**
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters
 * @example Input: s = SOSSOT
            Output: 3
 * @author sagars01
 * 
 * @type medium
 * @description Sliding Window using Direct Access Table. Learn Sliding Window Problems first.
 * 
 */

/**
 * @param {string} s
 * @return {number}
 *
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let dataAccessTable = new Map();
  let start = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (dataAccessTable.has(currChar)) {
      start = Math.max(dataAccessTable.get(currChar) + 1, start);
    }
    dataAccessTable.set(s[i], i);

    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
};

module.exports = lengthOfLongestSubstring;
