/**
 * Check if two trees are same
 * https://leetcode.com/problems/same-tree/
 */

const { numTree, numTree2, tree } = require('../../TestData/tree');

function isSameTree(p, q) {
  const queue = [p, q];
  while (queue.length > 0) {
    const first = queue.shift();
    const second = queue.shift();

    if (!first && !second) continue;
    if (!first || !second || first.value !== second.value) return false;

    queue.push(first.left);
    queue.push(second.left);
    queue.push(first.right);
    queue.push(second.right);
  }

  return true;
}

console.log(isSameTree(numTree, tree));
