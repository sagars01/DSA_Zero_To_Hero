const MinRotatedSortedArray = require('../../src/Arrays/MinRotatedSortedArray');

describe('Minimum in Sorted Array Test Suite', () => {
  test('should return 1 as it has only one element in the array', () => {
    const nums = [1];
    expect(MinRotatedSortedArray(nums)).toBe(1);
  });

  test('should return correct result : 1', () => {
    const nums = [3, 4, 5, 1, 2];
    expect(MinRotatedSortedArray(nums)).toBe(1);
  });
});
