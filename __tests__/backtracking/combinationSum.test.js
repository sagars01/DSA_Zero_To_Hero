const CS = require('../../src/Backtracking/CombinationSum');

describe('Backtracking: Combination Sum Test Suite', () => {
  test('should return true for 2 possible combinations', () => {
    let candidates = [2, 3, 6, 7],
      target = 7;
    let o = [[2, 2, 3], [7]];
    expect(CS(candidates, target)).toEqual(o);
  });

  test('should return true for 3 possible combinations', () => {
    let candidates = [2, 3, 5],
      target = 8;
    let o = [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ];
    expect(CS(candidates, target)).toEqual(o);
  });

  test('should return true for no possible combinations', () => {
    let candidates = [2],
      target = 1;
    let o = [];
    expect(CS(candidates, target)).toEqual(o);
  });
});
