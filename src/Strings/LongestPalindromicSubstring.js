/**
 * @link https://leetcode.com/problems/longest-palindromic-substring/
 * @example Input: s = "babad"
            Output: "bab"
            Explanation: "aba" is also a valid answer.
 * @author sagars01
 * 
 * @type medium
 * @description - watch YT videos 
 * https://www.youtube.com/watch?v=y2BD4MJqV20
 * 
 * 
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = '';
  const findLongestPalindrome = (str, i, j) => {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i -= 1;
      j += 1;
    }
    // slice the qualified substring from the second last iteration
    return str.slice(i + 1, j);
  };
  for (let i = 0; i < s.length; i++) {
    // palindrome can center around 1 or 2 letters
    const current1 = findLongestPalindrome(s, i, i);
    const current2 = findLongestPalindrome(s, i, i + 1);
    const longerPalindrome =
      current1.length > current2.length ? current1 : current2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
};

module.exports = longestPalindrome;
