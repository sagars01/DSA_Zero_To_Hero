/**
 * @link https://leetcode.com/problems/longest-common-subsequence/
 * @author sagars01
 * @kind Top Down Approach
 * @description The idea is based on Dynamic Programming's top down approach
 *
 * The subject here is the comparing both the string.
 * The algorithm goes like this for two strings text1 and text2
 *
 * Create a function which accepts i , j and implements following condition
 *  - If i >= text1.length || j  >= text2.length return 0 - Base condition
 *  - If (text1[i] === text2[j]) then continue exploring by increasing i + 1 and j + 1
 * - Else explore Math.max of i + 1 and j + 1
 *
 * Complexity: O ( M * N ^ 2)
 *
 */

function longestCommonSubsequence(text1, text2) {
  let memo = {};
  const dfs = (i, j) => {
    if (text1.length === 0 || text2.length === 0) return 0;
    if (i >= text1.length || j >= text2.length) return 0;

    let key = i + '#' + j;
    if (key in memo) return memo[key];

    if (text1[i] === text2[j]) {
      memo[key] = 1 + dfs(i + 1, j + 1);
    } else {
      memo[key] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
    }

    return memo[key];
  };

  return dfs(0, 0);
}
