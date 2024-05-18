/**
Given an array with positive numbers and a positive target number,
find all of its contiguous subarrays whose product is less than the target number.

Example 1:

Input: [2, 5, 3, 10], target=30
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.
*/

package twopointers

func (s *Solution) findSubarrays(arr []int, target int) [][]int {
	result := make([][]int, 0)

	left := 0
	product := 1

	for right := 0; right < len(arr); right++ {
		product *= arr[right]

		for left < len(arr) && product >= target {
			product /= arr[left]
			left++
		}

		var tempList []int

		// Iterate from 'right' to 'left' and add all these subarrays to the result.
		for i := right; i >= left; i-- {
			tempList = append([]int{arr[i]}, tempList...)
			result = append(result, append([]int(nil), tempList...))
		}
	}

	return result
}

/**



 */
