/**
 * https://leetcode.com/problems/subtree-of-another-tree/
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var isSubtree = function (root, subRoot) {
  const isSameTree = (p, q) => {
    if (!p || !q) return !p && !q;

    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };

  const dfs = (rootNode) => {
    if (rootNode === null) return false;

    if (isSameTree(rootNode, subRoot)) {
      return true;
    }

    return dfs(rootNode.left) || dfs(rootNode.right);
  };

  return dfs(root);
};

module.exports = isSubtree;
