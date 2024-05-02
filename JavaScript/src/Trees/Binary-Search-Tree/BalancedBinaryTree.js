/**
 * @link https://leetcode.com/problems/balanced-binary-tree/
 * @author sagars01
 * @description There are two ideas at play here:
 * 1. The difference in HEIGHT of left subtree and right subtree should be less than 2.
 * 2. We have to check from the leaf node to the parent node that condition 1 is satisfied
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function (root) {
  if(root === null) return true;
  
  
// 1. Calculate height of tree
const height = (node) => {
  if (node === null) return 0;
  return Math.max(height(node.left), height(node.right)) + 1;
};


return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};
