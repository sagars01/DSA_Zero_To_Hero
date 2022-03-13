const CreateBinaryTree = require('../../src/Trees/CreateBinaryTree');
const LevelOrderTraversal = require('../../src/Trees/LevelOrderTraversal');

describe('Invert Binary Tree Test Suite', () => {
  let tree;
  beforeAll(() => {
    tree = CreateBinaryTree([3, 9, 20, null, null, 15, 7]);
  });

  test('Level Order Traversal', () => {
    expect(LevelOrderTraversal(tree)).toEqual([[3], [9, 20], [15, 7]]);
  });
});
