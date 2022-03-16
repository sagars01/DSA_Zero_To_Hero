const { BinarySearchTree } = require('datastructures-js');
const ValidateBST = require('../../src/Trees/ValidateBST');

describe('Validate Binary Search Tree Test Suite', () => {
  test('Tree', () => {
    const bst = new BinarySearchTree();
    bst.insert(5, 5);
    bst.insert(2, 2);
    bst.insert(6, 6);

    expect(ValidateBST(bst)).toBe(true);
  });
});
