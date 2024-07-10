package fastslowpointers

type ListNode struct {
	Val  int
	Next *ListNode
}

// findCycleStart method of Solution struct
func FindCycleStart(head *ListNode) *ListNode {

	fast := head
	slow := head

	for fast != nil && fast.Next != nil {

		fast = fast.Next.Next
		slow = slow.Next

		if fast == slow {
			break
		}

	}

	if fast == nil {
		return fast
	}

	slow = head
	for slow != fast {
		slow = slow.Next
		fast = fast.Next
	}

	return slow
}
