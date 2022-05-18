const OWD = require('../../src/Graph/OptimizeWaterDistribution');

describe('Graph: Optimize Water Distribution', () => {
  test('should return correct answer', () => {
    const n = 3,
      wells = [1, 2, 2],
      pipes = [
        [1, 2, 1],
        [2, 3, 1],
      ];
    const output = 3;

    expect(OWD(n, wells, pipes)).toBe(output);
  });

  test('should return 2 answer', () => {
    const n = 2,
      wells = [1, 1],
      pipes = [
        [1, 2, 1],
        [1, 2, 2],
      ];
    const output = 2;

    expect(OWD(n, wells, pipes)).toBe(output);
  });
});
