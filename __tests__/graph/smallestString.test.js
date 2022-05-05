const {
  smallestStringWithSwaps,
  UnionFind,
} = require('../../src/Graph/SmallestStringWithSwaps');

describe('Smallest String With Swap Suite', () => {
  test('should set the size of the DS to any given size', () => {
    const size = 4;
    const uf = new UnionFind(size);
    expect(uf.size).toBe(4);
  });

  test('should create a root and rank of disjointSet based on size', () => {
    const size = 4;
    const uf = new UnionFind(size);
    expect(uf.root).toEqual([0, 1, 2, 3]);
    expect(uf.rank).toEqual([1, 1, 1, 1]);
  });

  test('should create a correct union of the graph vertices', () => {
    const size = 4;
    const uf = new UnionFind(size);
    [
      [0, 3],
      [1, 2],
    ].forEach(([x, y]) => {
      uf.unionFind(x, y);
    });

    expect(uf.root).toEqual([0, 1, 1, 0]);
  });

  test('should return a correct disjointSet Map after UnionFind', () => {
    const size = 4;
    const uf = new UnionFind(size);
    [
      [0, 3],
      [1, 2],
    ].forEach(([x, y]) => {
      uf.unionFind(x, y);
    });
    const iterator = uf.disjointSet().values();
    const first = iterator.next().value;
    const second = iterator.next().value;
    expect(first).toEqual([0, 3]);
    expect(second).toEqual([1, 2]);
  });

  test('should return bcad as a positive case', () => {
    const str = 'dcab';
    const pairs = [
      [0, 3],
      [1, 2],
    ];
    expect(smallestStringWithSwaps(str, pairs)).toBe('bacd');
  });
});
