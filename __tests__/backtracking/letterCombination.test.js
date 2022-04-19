const lc = require('../../src/Backtracking/LetterCombination');

describe('Backtracking: Letter Combination Suite', () => {
  test('should return 3 individual characters', () => {
    const op = ['a', 'b', 'c'];
    expect(lc('2')).toEqual(op);
  });

  test('should return all possible permutations', () => {
    const op = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(lc('23')).toEqual(op);
  });

  test('should return handle negative cases', () => {
    const op = [];
    expect(lc('2')).toEqual(op);
  });
});
