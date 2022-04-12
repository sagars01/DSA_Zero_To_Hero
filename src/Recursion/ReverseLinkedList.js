/**
 *  @description - Reverse a Linked List
 *  @link - https://leetcode.com/problems/reverse-linked-list/
 *  @author sagars01
 *
 */

var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return p;
};
