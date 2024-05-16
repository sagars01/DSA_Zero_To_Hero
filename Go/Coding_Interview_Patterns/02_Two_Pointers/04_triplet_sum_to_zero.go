/**
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
Explanation: There are four unique triplets whose sum is equal to zero. smallest sum.'

*/

package twopointers

import (
	"sort"
)

func (s *Solution) searchTriplets(arr []int) [][]int {
	triplets := make([][]int, 0)
	sort.Ints(arr) // Sort the array to use the 2 pointer technique effectively
	for i := 0; i < len(arr)-2; i++ {

		if i > 0 && arr[i] == arr[i-1] {
			continue
		}

		target := -arr[i]
		left := i + 1                              // We need the idx from where we will start the two pointer search;
		s.searchPair(target, left, arr, &triplets) // &triplets is the actual value that's passed as a pointer if I use *triplet again I should get the values back else will get a memory address
	}

	return triplets
}

func (s *Solution) searchPair(target int, left int, sortedArray []int, triplets *[][]int) {
	right := len(sortedArray) - 1

	for left < right {
		currentSum := sortedArray[left] + sortedArray[right]

		if currentSum == target {
			// Match Found
			*triplets = append(*triplets, []int{-target, sortedArray[left], sortedArray[right]})
			left++
			right--

			for left < right && sortedArray[left] == sortedArray[left-1] {
				left++
			}

			for left < right && sortedArray[right] == sortedArray[right+1] {
				right--
			}
		} else if target > currentSum {
			left++
		} else {
			right--
		}

	}

}

/**

Golang Learning

Pointers

triplets = [][]int is a variable containing array
&triplets is the actual value that pointers to the triplet
triplets *[][]int is the dereferenced pointer that will point to the actual value of the
triplet

So in summary

Pointers are the memory address
that can be accessed using *pointer_name
&pointer is the reference to the actual value


*/
