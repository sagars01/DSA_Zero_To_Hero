const { tree } = require('../../TestData/tree');

const TreeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  const isExistsLeft = TreeIncludes(root.left, target);
  const isExistsRight = TreeIncludes(root.right, target);

  return isExistsLeft || isExistsRight;
};

module.exports = TreeIncludes;
