/**
 * Just clone a graph.
 * @author sagars01
 * @description using BFS cloning any given graph. Run this code in Leetcode because I am not going to write TC for this one.
 * Use this as an example of breadthFirstSearch in Graph;
 *
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const map = new Map(); // Stores the adjacency list;
  // BFS = QUEUE
  const q = [node];

  while (!q.length === 0) {
    const root = q.shift();
    for (let neighbor of root.neighbors) {
      if (!map.has(neighbor)) {
        const newNode = new Node(neighbor.val);
        map.set(neighbor, newNode);
        q.push(neighbor);
      }

      const neighbors = map.get(root).neighbors;
      neighbors.push(map.get(neighbor));
    }
  }

  return map.get(node);
};
