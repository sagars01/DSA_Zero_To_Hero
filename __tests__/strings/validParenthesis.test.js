const isValid = require('../../src/Strings/ValidParenthesis.js');

describe('String: Valid Parenthesis Test Suite', () => {
  test('should return true for []', () => {
    const input = '[]';
    expect(isValid(input)).toBe(true);
  });
  test('should return false for []}', () => {
    const input = '[]}';
    expect(isValid(input)).toBe(false);
  });
});
