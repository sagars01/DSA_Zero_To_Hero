package warmup

/**
Solution 1: With Sets

*/

import (
    "fmt"
    "sort"
)

// Solution struct type
type Solution struct{}

// containsDuplicate checks for duplicates in a slice of integers
func (s *Solution) containsDuplicate(nums []int) bool {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] { // if any two elements are the same, return true
				return true
			}
		}
	}
	return false // if no duplicates are found, return false
}

/**

Solution 2: Sort the array
*/
// containsDuplicate checks if the array contains any duplicates.
func containsDuplicate(nums []int) bool {
    sort.Ints(nums) // sort the slice
    // use a loop to compare each element with its next element
    for i := 0; i < len(nums)-1; i++ {
        // if any two elements are the same, return true
        if nums[i] == nums[i+1] {
            return true
        }
    }
    return false // if no duplicates are found, return false
}

func main() {
	solution := Solution{}

	nums1 := []int{1, 2, 3, 4}
	fmt.Println(solution.containsDuplicate(nums1)) // Expected output: false

	nums2 := []int{1, 2, 3, 1}
	fmt.Println(solution.containsDuplicate(nums2)) // Expected output: true

	nums3 := []int{}
	fmt.Println(solution.containsDuplicate(nums3)) // Expected output: false

	nums4 := []int{1, 1, 1, 1}
	fmt.Println(solution.containsDuplicate(nums4)) // Expected output: true
}

