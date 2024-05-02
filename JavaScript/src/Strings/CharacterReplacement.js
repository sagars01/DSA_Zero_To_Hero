/**
 * @link https://leetcode.com/problems/longest-repeating-character-replacement/
 * @example 
 *  Input: s = "ABAB", k = 2
    Output: 4
   Explanation: Replace the two 'A's with two 'B's or vice versa.
 * @implements O(nklog(k))
 * @type Medium, Blind75
 * @author sagars01
 * @description this can be further optimized
 *
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};
