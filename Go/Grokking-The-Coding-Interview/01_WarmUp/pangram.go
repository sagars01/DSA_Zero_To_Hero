/**
Problem: 

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing English letters (lower or upper-case), return true if sentence is a pangram, or false otherwise.

Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.

Example 1:

Input: sentence = "TheQuickBrownFoxJumpsOverTheLazyDog"
Output: true
Explanation: The sentence contains at least one occurrence of every letter of the English alphabet either in lower or upper case.

*/

package warmup

import (
	"strings"
	"unicode"
)

type Solution struct{}

func (s *Solution) checkIfPangram(sentence string) bool {
	seen := make(map[rune]bool)
	// Convert sentence to lowercase and iterate over each character
	for _, currChar := range strings.ToLower(sentence) {
		if unicode.IsLetter(currChar) {
			// Add the character to set
			seen[currChar] = true
		}
	}

	return len(seen) == 26
}

