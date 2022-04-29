/**
 * @description Disjoint Sets in JavaScript
 * @author sagars01
 *
 */

class DisjointSet {
  root = [];
  constructor(size) {
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.root[i] = i;
    }
  }

  find(x) {
    return this.root[x];
  }

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
}

module.exports = DisjointSet;
