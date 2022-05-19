/**
 * Find if two vertices has a valid Path
 * @example Input: n = 3, 
 *          edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
            Output: true
 * @author sagars01
 * @description First we need to create an adjacency list with the above edges
 * Second we need to perform either DFS or BFS to check if it exists
 * 
 */

class Graph {
  constructor(size) {
    this.root = Array.from({ length: size }, (_, i) => i);
    this.rank = Array.from({ length: size }, () => 1);
  }

  find(elem) {
    if (elem === this.root[elem]) return elem;

    return (this.root[elem] = this.find(this.root[elem]));
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.root[rootX] = rootY;
    } else {
      this.root[rootY] = rootX;
      this.rank[rootX]++;
    }
  }

  hasPath(x, y) {
    return this.find(x) === this.find(y);
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  // Create the adjacency list
  const graph = new Graph(n);
  for (let [src, dest] of edges) {
    graph.union(src, dest);
  }
  return graph.hasPath(source, destination);
};

module.exports = validPath;
