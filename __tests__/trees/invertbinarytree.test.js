const CreateBinaryTree = require('../../src/Trees/CreateBinaryTree');
const InvertBinaryTree = require('../../src/Trees/InvertBinaryTree');

describe('Invert Binary Tree Test Suite', () => {
  let tree;
  beforeAll(() => {
    tree = CreateBinaryTree([2, 1, 3]);
  });

  test('Is Same Trees', () => {
    const invertedTree = CreateBinaryTree([2, 3, 1]);
    const invert = InvertBinaryTree(tree);
    expect(invert).toEqual(invertedTree);
  });
});
