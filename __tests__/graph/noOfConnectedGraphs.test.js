const NOCG = require('../../src/Graph/NumberOfConnectedGraph');

describe('Graph: Valid Tree Suite', () => {
  test('should be 2 as there are two connected edges', () => {
    const n = 5,
      edges = [
        [0, 1],
        [1, 2],
        [3, 4],
      ];
    expect(NOCG(n, edges)).toBe(2);
  });

  test('should be 3', () => {
    const n = 5,
      edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ];
    expect(NOCG(n, edges)).toBe(1);
  });

  test('should be 1', () => {
    const n = 4,
      edges = [
        [0, 1],
        [2, 3],
        [1, 2],
      ];
    expect(NOCG(n, edges)).toBe(1);
  });
});
