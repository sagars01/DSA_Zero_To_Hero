const mergeSort = require('../../src/Recursion/Divide-n-Conquer/MergeSortTD');

describe('MergeSort Test Suite', () => {
  test('should return [1] for only one element', () => {
    const input = [1];
    const o = [1];

    expect(mergeSort(input)).toEqual(o);
  });

  test('should return sorted array', () => {
    const input = [1, 3, 5, 2, 11, 9];
    const o = [...input];
    expect(mergeSort(input)).toEqual(o.sort());
  });
});
