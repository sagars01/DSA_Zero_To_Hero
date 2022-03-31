/**
 * @implements jest longestSubStrWRC
 *
 */

const long = require('../../src/Strings/LongestSubStrWRC.js');

describe('String: Longest SubString Without Repeating Characters Test Suite', () => {
  test('should return correct value 3', () => {
    const input = 'SOSSOT';
    expect(long(input)).toBe(3);
  });

  test('should return correct value 3', () => {
    const input = 'dvdf';
    expect(long(input)).toBe(3);
  });

  test('should handle error value of empty string', () => {
    const input = '';
    expect(long(input)).toBe(0);
  });
});
