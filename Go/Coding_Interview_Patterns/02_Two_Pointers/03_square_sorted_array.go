/**
Problem Statement
Given a sorted array, create a new array containing result of all the numbers
of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

*/

package twopointers

func (s *Solution) makeresult(arr []int) []int {
	n := len(arr)
	result := make([]int, n)
	left, right := 0, n-1
	counter := n - 1
	for left <= right {
		lsquare, rsquare := arr[left]*arr[left], arr[right]*arr[right]
		if lsquare < rsquare {
			result[counter] = rsquare
			right--
		} else {
			result[counter] = lsquare
			left++
		}
		counter--
	}

	return result
}

/**
Algorithm:

 What we have:
 - Sorted array of negative + positive integers

 What we want or will get:
 - Sorted array of positive integers
 - Since squaring two negatives will result to positive

 How do we get it

 We make a result array of same size of the given array ( arr )
 Now we know the largest number will be at the end of the array for arr as well as result

 So we initialize "counter" to the end of the "result" array

 Using two pointers technique all I need to do is

 lsquare = square of left side pointer
 rsquare = square of right side pointer

 compare which one is greater.

 lets say rsquare is greater then where is the pointer in result array
 at the end using the "counter" variable

 So we put the rsquare value in the "counter" position
 decrease the "counter" position to expect a lesser or equal number

 and since we found a greater number of at rsquare
 we are looking for the second greatest number
 which will be inwards [ <- rightPointer] of rightPointer

 We do the same thing for leftsquare [leftPointer -> ]
 and repeat until the counter fills up the entire array.

*/
