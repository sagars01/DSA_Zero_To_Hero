/**
 * LC: 1168. Optimize Water Distribution in a Village
 * @link https://leetcode.com/problems/optimize-water-distribution-in-a-village/
 * @type Hard
 * @author sagars01
 * @description using Union Find we can achieve the result
 * 1. Create the UnionFind class and methods;
 *      - here after joining the nodes just decrease the houses left
 *          - because we want to make two nodes as one after the join.
 * 2. Push a dummy node in the Pipes graph with the same weights
 * 3. Sort the pipes array from small to large
 * 4. Loop through the pipes
 *      Union the pipes and its weights
 *      If union is successful increase count;
 *      If houses left after union function is 0 then return count;
 *        It means we have reached the N - 1 edges;
 *
 */

class UnionFind {
  constructor(size, n) {
    this.root = Array.from({ length: size }, (_, i) => i);
    this.rank = Array.from({ length: size }, () => 1);
    this.houseLeft = n;
  }

  find(x) {
    if (x === this.root[x]) {
      return x;
    }

    return (this.root[x] = this.find(this.root[x]));
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if(rootX === rootY) returfalse;

    if (this.rank[rootX] < this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootX] = rootY;
    } else {
      this.root[rootY] = rootX;
      this.rank[rootX] += 1;
    }

    this.houseLeft--;
    return true;
  }
}

/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function (n, wells, pipes) {
  // Update the pipes with the dummy vertex [0]
  for (let i = 0; i < wells.length; i++) {
    const toHouse = i + 1,
      weight = wells[i];
    pipes.push([0, toHouse, weight]);
  }

  pipes.sort((a, b) => a[2] < b[2]);
  const graph = new UnionFind(pipes.length, n);
  let cost = 0;
  for (const [fromHouse, toHouse, costOfPipe] of pipes) {
    if (graph.union(fromHouse, toHouse)) {
      cost += costOfPipe;
    }

    if (graph.houseLeft === 0) return cost;
  }
};

module.exports = minCostToSupplyWater;
