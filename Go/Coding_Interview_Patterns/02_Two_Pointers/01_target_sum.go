/**
Given an array of numbers sorted in ascending order and a target sum, 
find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers 
(i.e. the pair) such that they add up to the given target. 
If no such pair exists return [-1, -1].

*/

package twopointers

import ()
type Solution struct {
}
// search - finds a pair in arr with a given targetSum.
func (sol *Solution) search(arr []int, targetSum int) []int {

    start , end := 0 , len(arr) - 1

    for(start < end) {
        var sum int = arr[start] + arr[end]

        if sum == targetSum {
            return []int{start , end}
        }

        if sum < targetSum {
            start++
        } else {
            end--
        }
    }

    return []int{-1, -1} 
}

