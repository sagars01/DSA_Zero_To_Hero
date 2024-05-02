/**
 * @link https://leetcode.com/problems/delete-node-in-a-bst/
 * @author sagars01
 *
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  const dfs = (node) => {
    if (!node) return null;
    if (node.val === key) {
      // We got the match
      if (!node.left) {
        // If there's no left child then return the right child.
        return node.right;
      }

      if (!node.right) {
        // If there's no right child then return left child. Because it means its deleted
        return node.left;
      }

      // If the node (NODE <-- To be deleted ) has both child
      let current = node.right;
      while (current.left) {
        // I will have to traverse the extreme left of this child to find
        // a place for the left child of the NODE that's being deleted
        current = current.left;
      }
      // Now I found a place for NODE's left child.
      current.left = node.left;
      // I am returning the right side of the NODE because
      // we just balanced it.
      return node.right;
    }

    if (key < node.val) node.left = dfs(node.left);
    else node.right = dfs(node.right);
    return node;
  };

  return dfs(root);
};
