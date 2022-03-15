const CreateBinaryTree = require('../../src/Trees/CreateBinaryTree');
const IsSubTree = require('../../src/Trees/IsSubTree');

describe('Is Sub Tree Test Suite', () => {
  let tree, subtree;
  beforeAll(() => {
    tree = CreateBinaryTree([2, 1, 3]);
    subtree = CreateBinaryTree([2, 1, 3]);
  });

  test('Is Sub Trees', () => {
    const isSubtree = IsSubTree(tree, subtree);
    expect(isSubtree).toEqual(true);
  });

  // Add Multiple Tests and practice by solving the issues;
});
