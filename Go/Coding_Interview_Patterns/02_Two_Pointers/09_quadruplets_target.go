/**
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:

Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.

*/

package twopointers

import (
	"sort"
)

func (s *Solution) searchQuadruplets(arr []int, target int) [][]int {
	var quadruplets [][]int
	sort.Ints(arr)

	for i := 0; i < len(arr)-3; i++ {

		if i > 0 && arr[i] == arr[i-1] { // Skip duplicates for the first element
			continue
		}

		for j := i + 1; j < len(arr)-1; j++ {
			left, right := j+1, len(arr)-1

			if j > i+1 && arr[j] == arr[j-1] { // Skip duplicates for the second element
				continue
			}

			for left < right {
				sum := arr[i] + arr[j] + arr[left] + arr[right]
				if sum == target {

					quadruplets = append(quadruplets, []int{arr[i], arr[j], arr[left], arr[right]})
					left++
					right--
					for left < right && arr[left] == arr[left-1] {
						left++
					}

					for left < right && arr[right] == arr[right+1] {
						right--
					}
				} else if sum < target {
					left++
				} else {
					right--
				}
			}
		}
	}
	return quadruplets
}

/***

Notes:

Algorithm

- Sort the array for two pointer technique
- Start one pointer at i = 0
- Second j = i + 1
- Triplet Sum

Handle duplicates by increasing the pointers.

*/
