/**
 * @link https://leetcode.com/problems/binary-search-tree-iterator/
 * @author sagars01
 *
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];
  this.iterator = (root) => {
    if (!root) return;
    this.iterator(root.left);
    this.stack.push(root.val);
    this.iterator(root.right);
  };

  this.iterator(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let nextElement = null;
  if (this.stack.length > 0) {
    nextElement = this.stack.shift();
  }

  return nextElement;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  if (this.stack.length > 0) return true;
  return false;
};

/** 

// Basic Test cases

const root = {
    val : 2,
    left: {
        val : 1,
        left : null,
        right: null
    },
    right : {
        val: 3,
        left: null,
        right: null,
    }
}
var obj = new BSTIterator(root)
var param_1 = obj.next()
var param_2 = obj.hasNext()

*/
