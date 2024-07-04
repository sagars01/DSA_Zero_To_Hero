package warmup

import (
	"strings"
	"unicode"
)

func (sol *Solution) isPalindrome(s string) bool {

	start := 0
	end := len(s) - 1

	for start < end {

		for start < end && !isLetterOrDigit(rune(s[start])) {
			start++
		}

		for start < end && !isLetterOrDigit(rune(s[end])) {
			end--
		}

		if strings.ToLower(string(s[start])) != strings.ToLower(string(s[end])) {
			return false
		}

		start++
		end--
	}

	return true
}

func isLetterOrDigit(r rune) bool {
	return unicode.IsLetter(r) || unicode.IsDigit(r)
}

/**
Golang Learning

append returns a new slice: so assign it back to the original variable
rune can be validate using unicode

*/
