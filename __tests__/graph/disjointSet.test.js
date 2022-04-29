const DisjointSet = require('../../src/Graph/DisjointSet');

describe('Graph: Disjoint Set Implementation', () => {
  const size = 10;
  const testArray = new Array(size);

  beforeEach(() => {
    for (let i = 0; i < size; i++) {
      testArray[i] = i;
    }
  });
  test('should create a disjoint set', () => {
    const ds = new DisjointSet(size);
    expect(ds.root).toEqual(testArray);
  });

  test('should create union in a disjoint set', () => {
    const ds = new DisjointSet(size);
    ds.unionFind(1, 2);
    ds.unionFind(2, 3);
    ds.unionFind(3, 4);

    expect(ds.isConnected(2, 4)).toBe(true);
  });

  test('should check if the nodes are not connected', () => {
    const ds = new DisjointSet(size);
    ds.unionFind(1, 2);
    ds.unionFind(2, 3);
    ds.unionFind(3, 4);
    ds.unionFind(5, 6);

    expect(ds.isConnected(1, 5)).toBe(false);
  });

  test('should return the updated disjointSet', () => {
    const ds = new DisjointSet(size);
    ds.unionFind(1, 2);
    ds.unionFind(2, 3);
    ds.unionFind(3, 4);
    ds.unionFind(5, 6);
    expect(ds.getDisjointSet()).toBeTruthy();
  });

  test('should return the updated disjointSet with unionRank', () => {
    const ds = new DisjointSet(size);
    ds.unionByRank(0, 1);
    ds.unionByRank(1, 2);
    ds.unionByRank(0, 3);
    ds.unionByRank(3, 5);

    console.log(ds.getDisjointSet());
    const rank = [0, 0, 0, 0, 4, 0, 6, 7, 8, 9, ];
    expect(ds.getDisjointSet()).toEqual(rank);
  });
});
