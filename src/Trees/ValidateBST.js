/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 *
 */

function ValidateBinarySearchTree(root) {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    const currentVal = current.val;
    if (
      (current.left && current.left.val > currentVal) ||
      (current.right && current.right.val < currentVal)
    ) {
      return false;
    }

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return true;
}
