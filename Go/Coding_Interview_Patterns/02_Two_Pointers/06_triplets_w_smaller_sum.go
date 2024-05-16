/**
Problem Statement
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
*/

package twopointers

import "sort"

func (s *Solution) searchTripletsWSmallerCount(arr []int, target int) int {
	count := 0
	sort.Ints(arr)

	for i := 0; i < len(arr)-2; i++ {
		left, right := i+1, len(arr)-1

		for left < right {
			currentSum := arr[i] + arr[left] + arr[right]

			if currentSum < target {
				count += right - left
				left++
			} else {
				right--
			}
		}
	}

	return count
}

/**

GoLang : None

Approach:

Since I have to calculate only the numbers
I can use a trick

The same format for calculating the triplet we just compare
if the currentSum < target

If Yes we have a match

In a given range if the sum of extreme left and extreme right < target
it means all the combination between them will also
be < target

So we do count := right - left
and keep increasing the left for more combinations

ELse if the summation is > target
we need to find the smaller number
so we decrease the largest extreme to reduce the summation count.

*/
