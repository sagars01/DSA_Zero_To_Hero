const subset = require('../../src/Backtracking/Subsets');

describe('Backtracking: Subsets Test Suite', () => {
  test('should return 8 subsets for [1, 2, 3]', () => {
    let nums = [1, 2, 3],
      o = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]];

    expect(subset(nums)).toEqual(o);
  });
});
