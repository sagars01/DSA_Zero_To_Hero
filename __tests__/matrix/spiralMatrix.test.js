const SpiralMatrix = require('../../src/Matrix/SpiralMatrix');

describe('Matrix: SetZeroMatrix Test Suite', () => {
  test('should return correct values on output', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
      [17, 18, 19, 20],
    ];
    const o = [
      1, 2, 3, 4, 8, 12, 16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10,
    ];
    expect(SpiralMatrix(matrix)).toEqual(o);
  });

  test('should return correct values on output', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const o = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
    expect(SpiralMatrix(matrix)).toEqual(o);
  });

  test('should return correct values on output', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const o = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(SpiralMatrix(matrix)).toEqual(o);
  });

  test('should return correct values on output', () => {
    const matrix = [[1], [2], [3], [4]];
    const o = [1, 2, 3, 4];
    expect(SpiralMatrix(matrix)).toEqual(o);
  });
});
