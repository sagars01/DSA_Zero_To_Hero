/***
 * @description generate a binary tree from an array
 * @method CreateBinaryTree
 *
 */

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function insertNode(tree, value) {
  var node = tree,
    key;
  while (node.value !== value) {
    key = value < node.value ? 'left' : 'right';
    if (!node[key]) {
      node[key] = new Node(value);
      break;
    }
    node = node[key];
  }
  return tree;
}

function CreateBinaryTree(treeArray) {
  const array = treeArray,
    tree = array.reduce((t, v) => (t ? insertNode(t, v) : new Node(v)), null);
  return tree;
}

module.exports = {
  CreateBinaryTree,
};
