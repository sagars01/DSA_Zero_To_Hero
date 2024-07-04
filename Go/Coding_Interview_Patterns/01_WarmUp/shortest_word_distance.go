/**
Problem Statement
Given an array of strings words and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

Example 1:

Input: words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], word1 = "fox", word2 = "dog"
Output: 5
Explanation: The distance between "fox" and "dog" is 5 words.
Example 2:

Input: words = ["a", "c", "d", "b", "a"], word1 = "a", word2 = "b"
Output: 1
Explanation: The shortest distance between "a" and "b" is 1 word. Please note that "a" appeared twice.
Example 3:

Input: words = ["a", "b", "c", "d", "e"], word1 = "a", word2 = "e"
Output: 4
Explanation: The distance between "a" and "e" is 4 words.
Constraints:

2 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
word1 and word2 are in words.
word1 != word2

*/

package warmup

import (
	"math"
)

// shortestDistance finds the shortest distance between two words in an array.
func (s *Solution) shortestDistance(words []string, word1 string, word2 string) int {

	IW1 := -1
	IW2 := -1
	diff := len(words) + 1

	for index, word := range words {
		if word == word1 {
			IW1 = int(math.Max(float64(IW1), float64(index))) // Convert to float64
		}

		if word == word2 {
			IW2 = int(math.Max(float64(IW2), float64(index))) // Convert to float64
		}

		if IW1 != -1 && IW2 != -1 {
			d := math.Abs(float64(IW2 - IW1))      // Declare d as float64
			diff = int(math.Min(float64(diff), d)) // Convert to float64
		}

	}

	return diff
}

/**
Golang Language Learning

math.Max expects float64 arguments:
The math.Max function is designed to find the maximum value between two numbers.
 It can handle decimals, so it expects arguments of type float64.
You were trying to pass integers (IW1, index) directly, leading to a type mismatch.

math.Max expects float64 arguments: The math.Max function is designed
to find the maximum value between two numbers.
It can handle decimals, so it expects arguments of type float64.

You were trying to pass integers (IW1, index) directly, leading to a type mismatch.

*/
