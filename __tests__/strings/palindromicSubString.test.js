const PS = require('../../src/Strings/PalindromicSubString.js');

describe('String: Palindromic SubString Suite', () => {
  test('should return correct output', () => {
    const o = PS('aaa');
    expect(o).toBe(6);
  });

  test('should 1 for one character', () => {
    const o = PS('a');
    expect(o).toBe(1);
  });

  test('should return 0 for empty string', () => {
    const o = PS('');
    expect(o).toBe(0);
  });
});
