package tests

import (
	"reflect"
	"testing"
	"top75/top75"
)

func TestKidwithGreatestCandies(t *testing.T) {
	tests := []struct {
		candies      []int
		extraCandies int
		expected     []bool
	}{
		{
			candies:      []int{2, 3, 5, 1, 3},
			extraCandies: 3,
			expected:     []bool{true, true, true, false, true},
		},
		{
			candies:      []int{4, 2, 1, 1, 2},
			extraCandies: 1,
			expected:     []bool{true, false, false, false, false},
		},
		{
			candies:      []int{12, 1, 12},
			extraCandies: 10,
			expected:     []bool{true, false, true},
		},
	}

	for _, test := range tests {
		t.Run("", func(t *testing.T) {
			top := &top75.Top75{}
			result := top.KidwithGreatestCandies(test.candies, test.extraCandies)
			if !reflect.DeepEqual(result, test.expected) {
				t.Errorf("expected %v, got %v", test.expected, result)
			}
		})
	}
}
