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
  root = [];
  constructor(size) {
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
    }
  }

  // Returns the root of a given node
  find(x) {
    return this.root[x];
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

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }

  getDisjointSet() {
    return this.root;
  }
}

module.exports = DisjointSet;
