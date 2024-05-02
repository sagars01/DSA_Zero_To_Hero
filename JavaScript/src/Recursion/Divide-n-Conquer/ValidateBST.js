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
 * @description of solution
 *
 * left = The left side of the tree should always be less than the root, so we are checking if the current node is greater than or equal to the max value that is the root then return false.
 *
 * right = The right side of the tree should always be greater than the root and the root is the minimum value for the right side of the tree.
 *
 * So, if the right side of the tree contains any value that's less than the previous min value then there's a problem.
 *
 */
var isValidBST = function (root, min = null, max = null) {
  if (root === null) return true;

  const current = root.val;
  if (min && current <= min.val) return false;
  if (max && current >= max.val) return false;

  const left = isValidBST(root.left, min, root);
  const right = isValidBST(root.right, root, max);

  return left && right;
};
