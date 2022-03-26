const ThreeSum = require('../../src/Arrays/ThreeSum');

describe('3 Sum test suite', () => {
  const input = [-1, 0, 1, 2, -1, -4];
  const op = [
    [-1, -1, 2],
    [-1, 0, 1],
  ];
  test('should return an array of two numbers', () => {
    expect(ThreeSum(input)).toEqual(op);
  });
});
