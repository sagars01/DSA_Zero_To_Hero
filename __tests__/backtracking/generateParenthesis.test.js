const GP = require('../../src/Backtracking/GenerateParenthesis');

describe('Backtracking: Generate Parenthesis Test Suite', () => {
  test('should return valid response', () => {
    const input = 2;
    const output = ['(())', '()()'];

    expect(GP(input)).toEqual(output);
  });

  test('should handle edge cases - I', () => {
    const input = 0;
    const output = [];

    expect(GP(input)).toEqual(output);
  });

  test('should handle edge case- II', () => {
    const input = -1;
    const output = [];

    expect(GP(input)).toEqual(output);
  });
});
