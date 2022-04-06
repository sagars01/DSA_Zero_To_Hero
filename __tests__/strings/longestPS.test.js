const LPS = require('../../src/Strings/LongestPalindromicSubstring.js');

describe('String: Longest SubString Without Repeating Characters Test Suite', () => {
  test('should return correct output', () => {
    const s = 'cbbd';
    const o = 'bb';
    expect(LPS(s)).toBe(o);
  });
});
