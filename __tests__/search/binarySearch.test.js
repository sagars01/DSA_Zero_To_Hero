const BinarySearch = require('../../src/Search/BinarySearch');

describe('Binary Search Test Suite', () => {
  test('should return -1 ', () => {
    const nums = [1, 2, 3, 4];
    const target = 5;
    expect(BinarySearch(nums, target)).toBe(-1);
  });

  test('should return 1 ', () => {
    const nums = [1, 2, 3, 4];
    const target = 2;
    expect(BinarySearch(nums, target)).toBe(1);
  });

  test('should return -1 ', () => {
    const nums = [1, 2, 3, 4];
    const target = 5;
    expect(BinarySearch(nums)).toBe(-1);
  });
});
