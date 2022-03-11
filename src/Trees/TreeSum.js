const { numTree } = require('../../TestData/tree');

function treeSum(root) {
  if (root === null) {
    return 0;
  }

  return root.value + treeSum(root.left) + treeSum(root.right);
}

console.log(treeSum(numTree));
