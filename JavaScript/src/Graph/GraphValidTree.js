/**
 * Check if the graph a valid tree
 * @link https://leetcode.com/problems/graph-valid-tree/
 * @tag medium
 * @author sagars01
 * @description The idea:
 * 1. Create a disjoint set.
 * 2. Find cycle in the graph.
 *    - If cycle exists then not valid tree
 *    - else valid
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (n - 1 !== edges.length) return false;

  const disjointSet = new Array(n).fill(1).map((_, index) => index);

  const find = (n) => {
    if (disjointSet[n] === n) return n;

    return (disjointSet[n] = find(disjointSet[n]));
  };

  const unionFind = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) {
      return false;
    }

    disjointSet[rootY] = rootX;
    return true;
  };

  for (let [x, y] of edges) {
    if (!unionFind(x, y)) return false;
  }

  return true;
};

module.exports = validTree;
