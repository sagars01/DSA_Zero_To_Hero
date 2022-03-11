const CreateBinaryTree = require('../../src/Trees/CreateBinaryTree');
const SameTree = require('../../src/Trees/SameTree');

describe('Same Tree Test Suite', () => {
  let tree;
  beforeEach(() => {
    tree = CreateBinaryTree([1, 2, 3, 4, 5, 6]);
  });

  test('Is Same Trees', () => {
    expect(SameTree(tree, tree)).toBe(true);
  });

  test('Is Different Trees', () => {
    const emptyTree = null;
    expect(SameTree(tree, null)).toBe(false);
  });
});
