/**

Problem Statement
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-1, 0, 2, 3], target=3
Output: 2
Explanation: The triplet [-1, 0, 3] has the sum '2' which is closest to the target.

There are two triplets with distance '1' from the target: [-1, 0, 3] & [-1, 2, 3].
Between these two triplets, the correct answer will be [-1, 0, 3] as it has a
sum '2' which is less than the sum of the other triplet which is '4'.
This is because of the following requirement: 'If there are more than one such triplet,
return the sum of the triplet with the smallest sum.'

*/

package twopointers

import (
	"math"
	"sort"
)

func (s *Solution) searchTripletsCloseTarget(arr []int, targetSum int) int {

	// Sort the array for two pointer

	sort.Ints(arr)
	minDistance := math.MaxInt32
	for i := 0; i < len(arr)-2; i++ {
		left, right := i+1, len(arr)-1

		for left < right {
			currentDistance := targetSum - arr[i] - arr[left] - arr[right]

			if currentDistance == 0 {
				return targetSum
			}

			if math.Abs(float64(minDistance)) > math.Abs(float64(currentDistance)) ||
				(math.Abs(float64(currentDistance)) == math.Abs(float64(minDistance)) &&
					currentDistance > minDistance) {
				minDistance = currentDistance
			}

			if currentDistance > 0 {
				left++
			} else {
				right--
			}
		}
	}

	return targetSum - minDistance
}

/**

GoLang Learning

Math.MAX in JS = math.MaxInt32/64/128
To compare math.Max in Go you have to convert the int to float32
Else type mismatch

Panic is the throw of Go

*/
