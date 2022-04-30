/**
 * Find the number of provinces in a GRAPH
 * @link https://leetcode.com/problems/number-of-provinces/
 * @description The underlying idea is to treat connected nodes as one province.
 * If we can find the relationship between the nodes (vertex) and group them based on their parents in a different array. I believe we should have our answer
 * A -> B -> C = A
 * C -> D = A
 * Total Province = 1 i.e A
 * Approach
 *  We should use unionFind to map the vertices
 *  Find the unique roots in the array.
 *
 *
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

var findCircleNum = function (isConnected) {
  const N = isConnected.length;
  let size = N;
  const disjointSet = new Array(N).fill(1).map((_, index) => index);
  const rank = new Array(N).fill(1);

  const find = (vertex) => {
    if (disjointSet[vertex] === vertex) return vertex;
    return disjointSet[vertex] == find(disjointSet[vertex]);
  };

  const unionByRank = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      size--;
      if (rank[rootX] > rank[rootY]) {
        disjointSet[rootY] = rootX;
      } else if (rank[rootX] < rank[rootY]) {
        disjointSet[rootX] = rootY;
      } else {
        disjointSet[rootX] = rootY;
        rank[rootX] += 1;
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (isConnected[i][j] === 1) {
        unionByRank(i, j);
      }
    }
  }

  return size;
};

module.exports = findCircleNum;
