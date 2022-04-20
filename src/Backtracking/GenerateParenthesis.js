/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * @link https://leetcode.com/problems/generate-parentheses/
 * @description create a map of parenthesis and recursively generate all permutaions. Underlying logic is Backtracking
 * @author sagars01
 *
 */

const GenerateParenthesis = (n) => {
  let result = [];
  if (n < 1) return result;

  const d = (l, r, s) => {
    if (s.length === 2 * n) {
      result.push(s);
      return;
    }

    if (l < n) d(l + 1, r, s + '(');
    if (r < l) d(l, r + 1, s + ')');
  };

  d(0, 0, '');
  return result;
};

module.exports = GenerateParenthesis;
