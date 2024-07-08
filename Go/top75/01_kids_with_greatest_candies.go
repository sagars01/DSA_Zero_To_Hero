package top75

import "fmt"

type Top75 struct {
}

// Method KidwithGreatestCandies with a receiver of type *Top75
func (t *Top75) KidwithGreatestCandies(candies []int, extraCandies int) []bool {
	result := make([]bool, len(candies))
	max := -1
	for c := range candies {
		newCount := candies[c] + extraCandies
		candies[c] = newCount
		if newCount > max {
			max = newCount
		}
	}

	for i, n := range candies {
		if n < max {
			result[i] = true
		} else {
			result[i] = false
		}
	}

	fmt.Println(result)

	return result
}
