/**
 * Find the lexicographically [ literal meaning based on an English dictionary the word that will come at first ] smallest string;
 * @link https://leetcode.com/problems/smallest-string-with-swaps/
 * @example Input: s = "dcab", pairs = [[0,3],[1,2]]
            Output: "bacd"
            Explaination: 
            Swap s[0] and s[3], s = "bcad"
            Swap s[1] and s[2], s = "bacd"
 *            
 * @description We are solving this using a Disjoint Set
 *  How will the DS help here?
 *  DS will help us build the connection of the chars and sort them individually. 
 * Once we have each string sorted the result is a sorted string
 *
 */

/**
 * Building Disjoint Set for the connection
 *
 */

class UnionFind {
  constructor(n) {
    this.size = n;
    this.root = new Array(n).fill(1).map((_, idx) => idx);
    this.rank = new Array(n).fill(1);
  }

  find(x) {
    if (x === this.root[x]) return this.root[x];

    return (this.root[x] = this.find(this.root[x]));
  }

  unionFind(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.root[rootX] = rootY;
    } else {
      this.root[rootY] = rootX;
      this.rank[rootX] += 1;
    }
  }

  disjointSet() {
    let map = new Map();
    for (let i = 0; i < this.size; i++) {
      const root = this.find(i);
      const vertex = map.has(root) ? map.get(root) : [];
      vertex.push(i);
      map.set(root, vertex);
    }

    return map;
  }
}

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const uf = new UnionFind(s.length);
  pairs.forEach(([x, y]) => {
    uf.unionFind(x, y);
  });
  let result = [];

  uf.disjointSet().forEach((idxs) => {
    const chars = idxs.map((idx) => s[idx]);
    chars.sort();
    let i = 0;
    idxs.forEach((idx) => {
      result[idx] = chars[i++];
    });
  });

  return result.join('');
};

module.exports = { UnionFind, smallestStringWithSwaps };
