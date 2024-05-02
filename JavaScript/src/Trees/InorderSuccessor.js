/**
 * Given the root of a binary search tree and a node p in it, return the in-order successor of that node in the BST. If the given node has no in-order successor in the tree, return null.
 *
 * @link https://leetcode.com/problems/inorder-successor-in-bst/
 * @description Few concepts to remember
 * 1. BST is always balanced with left child always smaller than parent and vice versa
 * 2. In an inorder traversal of a BST will return all the element sorted
 * 3. If you travel inorder and you find any number greater than the asked number 'p' then return that node, that's `p`'s successor;
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

/*
    
*/
var inorderSuccessor = function (root, p) {
  let s = null;

  const t = (root) => {
    if (root === null) return null;

    const val = root.val;
    if (val <= p.val) {
      t(root.left);
    } else {
      s = root;
      t(root.right);
    }
    return node;
  };

  t(root);

  return s;
};

module.exports = inorderSuccessor;