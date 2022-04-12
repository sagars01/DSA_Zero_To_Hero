const { p1, p2 } = require('../../src/Recursion/PascalsTriangle1');

describe('Pascals Triangle Test Suite', () => {
  test('should return correct op with P1 methd', () => {
    expect(p1(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });
});
