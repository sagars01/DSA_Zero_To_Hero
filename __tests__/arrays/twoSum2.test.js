const TwoSum = require('../../src/Arrays/TwoSum2');

describe('Two Sum II test suite', () => {
  test('should return an array of two numbers', () => {
    const numbers = [2, 3, 4],
      target = 6;
    const output = [1, 3];

    expect(TwoSum(numbers, target)).toEqual(output);
  });
  test('should return an array of two numbers', () => {
    const numbers = [1, 2, 4, 7, 15],
      target = 60;
    const output = [];

    expect(TwoSum(numbers, target)).toEqual(output);
  });
});
