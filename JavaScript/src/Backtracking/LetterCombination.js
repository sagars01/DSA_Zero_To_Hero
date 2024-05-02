/**
 * @link https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @type medium
 * @example
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0 || digits === '1') return [];

  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const result = [];
  const permute = (str, idx) => {
    if (idx === digits.length) {
      result.push(str);
      return;
    }

    for (let char of map[digits[idx]]) {
      permute(str + char, idx + 1);
    }
  };

  permute('', 0);

  return result;
};

module.exports = letterCombinations;
