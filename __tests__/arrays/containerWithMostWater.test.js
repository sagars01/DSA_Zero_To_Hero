const maxArea = require('../../src/Arrays/ContainerWithMostWater');

describe('Container with Most Water test suite', () => {
  test('should return 49 as the max water possible to store', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const output = 49;

    expect(maxArea(height)).toEqual(output);
  });

  test('should return 4 as the max water possible to store', () => {
    const height = [1, 2, 0, 5];
    const output = 4;

    expect(maxArea(height)).toEqual(output);
  });

  test('should return 1 as the max water possible to store', () => {
    const height = [1, 1];
    const output = 1;

    expect(maxArea(height)).toEqual(output);
  });

  test('should return 0 as the max water is impossible to store', () => {
    const height = [0, 2];
    const output = 0;

    expect(maxArea(height)).toEqual(output);
  });
});
