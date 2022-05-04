/**
 * Find the number of connected graph from the given edges
 * @link https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 * @example Input: n = 5, edges = [[0,1],[1,2],[3,4]]
            Output: 2
 * @description Trace the disjointSet and find out number of nodes are connected to itself
 *
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const disjointSet = new Array(n).fill(1).map((_, index) => index);

  const find = (n) => {
    if (disjointSet[n] === n) return n;

    return (disjointSet[n] = find(disjointSet[n]));
  };

  const unionFind = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);
    disjointSet[rootX] = rootY;
  };

  for (let [i, j] of edges) {
    unionFind(i, j);
  }

  const set = new Set();
  for (let i = 0; i < disjointSet.length; i++) {
    set.add(find(disjointSet[i]));
  }

  return set.size;
};

module.exports = countComponents;
