/**
 * @link https://leetcode.com/problems/insert-into-a-binary-search-tree/
 * @author sagars01
 * @type medium
 * @description
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
 * @param {number} val
 * @return {TreeNode}
 */

var insertIntoBST = function (root, val) {
  if (root === null) {
    root = new TreeNode(val, null, null);
    return root;
  }

  const insert = (node, val) => {
    if (node === null) {
      node = new TreeNode(val, null, null);
      return node;
    }

    if (node.val > val) {
      node.left = insert(node.left, val);
    } else {
      node.right = insert(node.right, val);
    }

    return node;
  };

  return insert(root, val);
};
