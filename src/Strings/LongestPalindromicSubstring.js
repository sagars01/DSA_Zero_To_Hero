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
  // Let's use the onion peeling technique.
  // remember the onion peeling technique starts from the first index, dont
  // get confused that you will start from the middle

  /**
   * @param {string} str
   * @param {number} left
   * @param {number} right
   *
   */
  const peeler = (str, left, right) => {
    while (str[left] === str[right] && left > -1 && right < str.length) {
      left--;
      right++;
    }

    return str.slice(left + 1, right);
  };
  let longestS = '';
  for (let i = 0; i < s.length; i++) {
    const p1 = peeler(s, i, i);
    const p2 = peeler(s, i, i + 1);
    const p = p1.length > p2.length ? p1 : p2;
    if (p.length > longestS.length) {
      longestS = p;
    }
  }

  return longestS;
};

module.exports = longestPalindrome;
