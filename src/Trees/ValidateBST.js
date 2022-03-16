/**
 * https://leetcode.com/problems/valueidate-binary-search-tree/
 *
 *
 */

function valueidateBinarySearchTree(root) {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    const currentvalue = current.value;
    if (
      (current.left && current.left.value > currentvalue) ||
      (current.right && current.right.value < currentvalue)
    ) {
      return false;
    }

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return true;
}

module.exports = valueidateBinarySearchTree;
