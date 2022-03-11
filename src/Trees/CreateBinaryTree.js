/***
 * @description generate a binary tree from an array
 * @method CreateBinaryTree
 *
 */

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function insertNode(tree, val) {
  var node = tree,
    key;
  while (node.val !== val) {
    key = val < node.val ? 'left' : 'right';
    if (!node[key]) {
      node[key] = new Node(val);
      break;
    }
    node = node[key];
  }
  return tree;
}

/**
 * @param pass an array of numbers | string
 */
function CreateBinaryTree(treeArray) {
  const array = treeArray,
    tree = array.reduce((t, v) => (t ? insertNode(t, v) : new Node(v)), null);
  return tree;
}

module.exports = CreateBinaryTree;
