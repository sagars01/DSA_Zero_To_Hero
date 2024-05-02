/**
 * @description Swap adjacent nodes of Linked List
 * @example
 *  IP: 1 -> 2 -> 3 -> 4
 *  OP: 2 -> 1 -> 4 -> 3
 * @author sagars01
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(value, next) {
 *     this.value = (value===undefined ? 0 : value)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let nextNode = head.next;

  current.next = swapPairs(nextNode.next);
  nextNode.next = current;

  return nextNode;
};

module.exports = swapPairs;
