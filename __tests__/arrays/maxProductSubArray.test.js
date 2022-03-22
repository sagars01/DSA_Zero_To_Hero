const MaxProductSubArray = require('../../src/Arrays/MaxProductSubArray');

describe('Maximum Product Sub Array Test Suite', () => {
  test('should return 1 as it has only one element in the array', () => {
    const nums = [1];
    expect(MaxProductSubArray(nums)).toBe(1);
  });

  test('should return correct result', () => {
    const nums = [2, 3, -2, 4];
    expect(MaxProductSubArray(nums)).toBe(6);
  });
});
