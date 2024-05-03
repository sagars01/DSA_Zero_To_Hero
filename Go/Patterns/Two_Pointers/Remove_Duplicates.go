/**
Link : https://leetcode.com/problems/remove-duplicates-from-sorted-list/
1. Brute Force

    Create a set
    Loop through the LL
    Sort the Set
    Recreate the LL

    Time Complexity: O(n)
    Space Complexity: O(n)

2.  Pointer

    if current.value === current.next.value
        // Move the pointer to current.next.next
        // why?
        // since the next value is same I want the next of next value to be my next.value
        // So what happens to the first pointer
        // current pointer's next pointer points to the next to next item
*/


/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

package twopointers

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteDuplicates(head *ListNode) *ListNode {
	current := head

	for current != nil && current.Next != nil {
		if current.Val == current.Next.Val {
			current.Next = current.Next.Next
		} else {
			current = current.Next
		}
	}

	return head
}
