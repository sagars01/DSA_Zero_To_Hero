/**
 * @link https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// Create an array from a tree
var serialize = function (root) {
  if (root === null) return [];
  let data = [];

  const serializing = (node) => {
    if (node === null) {
      data.push('null');
      return null;
    }

    data.push(`${node.val}`);
    serializing(node.left);
    serializing(node.right);
  };

  serializing(root);

  return data;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length === 0) return null;
  const d = (nodes) => {
    if (nodes.length === 0) return;
    const n = nodes.shift();
    if (n === 'null') {
      return null;
    }

    const node = new TreeNode(Number(n));
    node.left = d(nodes);
    node.right = d(nodes);

    return node;
  };

  return d(data);
};

module.exports = {
  serialize,
  deserialize,
};
