/**
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 * @link https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @description
 * @author sagars01
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
  const helper = (start, end) => {
    if (start > end) return null;

    const val = preorder.shift();
    const node = new TreeNode(val);
    const nodeIndex = inorder.indexOf(val);

    node.left = helper(start, nodeIndex - 1);
    node.right = helper(nodeIndex + 1, end);

    return node;
  };
  return helper(0, preorder.length - 1);
};
