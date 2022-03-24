const MinRotatedSortedArray = require('../../src/Arrays/SearchRotatedSortedArray');

describe('Search in Sorted Array Test Suite', () => {
  test('should return correct answer', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 0;
    expect(MinRotatedSortedArray(nums, target)).toBe(4);
  });

  test('should return correct answer for start of array ', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 4;
    expect(MinRotatedSortedArray(nums, target)).toBe(0);
  });

  test('should return correct answer end of array', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 2;
    expect(MinRotatedSortedArray(nums, target)).toBe(6);
  });

  test('should return -1 as correct answer', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2],
      target = 10;
    expect(MinRotatedSortedArray(nums, target)).toBe(-1);
  });

  test('should return -1 for one element in array', () => {
    const nums = [4],
      target = 10;
    expect(MinRotatedSortedArray(nums, target)).toBe(-1);
  });

  test('should return -1 for empty array', () => {
    const nums = [],
      target = 10;
    expect(MinRotatedSortedArray(nums, target)).toBe(-1);
  });

  test('should return correct answer for start of array ', () => {
    const nums = [4, 5],
      target = 4;
    expect(MinRotatedSortedArray(nums, target)).toBe(0);
  });

  test('should return correct answer for end of small array ', () => {
    const nums = [3, 1],
      target = 1;
    expect(MinRotatedSortedArray(nums, target)).toBe(1);
  });
});
