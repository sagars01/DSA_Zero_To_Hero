/**
 * Find the max depth of the binary Tree
 */

const { tree } = require('../../TestData/tree');

function depth(node) {
  if (node === null) {
    return 0;
  }
  return Math.max(depth(node.left), depth(node.right)) + 1;
}

module.exports = depth;
