const { BinarySearchTree } = require('datastructures-js');
const ValidateBST = require('../../src/Trees/ValidateBST');
const { BTree } = require('@dsinjs/binary-tree');

describe('Validate Binary Search Tree Test Suite', () => {
  xtest('Valid BST', () => {
    const bst = new BinarySearchTree();
    bst.insert(5, 5);
    bst.insert(2, 2);
    bst.insert(6, 6);

    expect(ValidateBST(bst)).toBe(true);
  });

  test('Invalid BST', () => {});
});
