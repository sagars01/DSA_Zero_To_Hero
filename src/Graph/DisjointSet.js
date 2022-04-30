/**
 * @description Disjoint Sets in JavaScript
 * @author sagars01
 * @example [0 , 1, 2 ,3 ,4]
 *   In this array
 *      The INDEX of the array is the node;
 *      The Value on INDEX is the root of the node;
 *      Initial State : All nodes are independent or not connected.
 *      unionFind(): Connects the Nodes
 *      find(): Returns the current node
 */

class DisjointSet {
  root;
  rank;
  constructor(size) {
    this.size = size;
    this.root = new Array(size);
    this.rank = new Array(size);
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
      this.rank[i] = 1;
    }
  }

  // Returns the root of a given node
  find(x) {
    return this.root[x];
  }

  // Optimized find

  findRoot(x) {
    while (x !== this.root[x]) {
      x = this.root[x];
    }

    return x;
  }

  // Find Root using Path Compression
  // Skipping one step;
  // complexity : O(logn)
  findRootCompressed(x) {
    if (x === this.root[x]) return x;
    return (this.root[x] = this.findRootCompressed(this.root[x]));
  }

  // Checks if the two given node (x , y) are connected.
  // If not connected this connect it.
  unionFind(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      for (let i = 0; i < this.root.length; i++) {
        if (this.root[i] === rootY) {
          this.root[i] = rootX;
        }
      }
    }
  }

  /**
   *
   * @description The union by rank is done to shorten the height of the Graph
   *
   */

  unionByRank(x, y) {
    const rootX = this.findRoot(x);
    const rootY = this.findRoot(y);

    if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.root[rootX] = rootY;
    } else {
      this.root[rootY] = rootX;
      this.rank[rootX] += 1;
    }
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }

  getDisjointSet() {
    return this.root;
  }
}

module.exports = DisjointSet;
