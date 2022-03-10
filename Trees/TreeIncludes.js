const { tree } = require('../TestData/tree');

const TreeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.value === target) return true;
  const isExistsLeft = TreeIncludes(root.left, target);
  const isExistsRight = TreeIncludes(root.right, target);

  return isExistsLeft || isExistsRight;
};

console.log(TreeIncludes(tree, 'E'));
