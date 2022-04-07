const ZeroMatrix = require('../../src/Matrix/SetZeroMatrix');

describe('Matrix: SetZeroMatrix Test Suite', () => {
  test('should return correct values on output', () => {
    let matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    let o = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    expect(ZeroMatrix(matrix)).toEqual(o);
  });
  test('should return correct values on output', () => {
    let matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];
    let o = [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ];
    expect(ZeroMatrix(matrix)).toEqual(o);
  });
});
