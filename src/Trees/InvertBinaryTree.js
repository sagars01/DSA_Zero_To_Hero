/**
 * https://leetcode.com/problems/invert-binary-tree/
 */

// Recursive

function invertBinaryTree(node) {
  if (node !== null) {
    let temp = node.left;
    node.left = invertBinaryTree(node.right);
    node.right = invertBinaryTree(temp);
  }

  return node;
}

module.exports = invertBinaryTree;
