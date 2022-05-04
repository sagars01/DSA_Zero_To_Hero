const GVT = require('../../src/Graph/GraphValidTree');

describe('Graph: Valid Tree Suite', () => {
  test('should be true as graph is a valid tree', () => {
    const n = 5,
      edges = [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
      ];
    expect(GVT(n, edges)).toBe(true);
  });
});
