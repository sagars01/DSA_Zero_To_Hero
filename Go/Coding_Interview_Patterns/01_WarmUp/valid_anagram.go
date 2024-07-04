/*
*
Problem Statement
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "listen", t = "silent"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/
package warmup

func (sol *Solution) isAnagram(s, t string) bool {

	if len(s) != len(t) {
		return false
	}

	set := make(map[rune]int)

	for _, r := range s {
		if _, ok := set[r]; !ok {
			set[r] = 1
		} else {
			set[r] += 1
		}
	}

	for _, k := range t {
		if _, ok := set[k]; !ok {
			return false
		}

		value, _ := set[k]

		if value == 1 {
			delete(set, k)
		} else {
			set[k] -= 1
		}
	}

	return len(set) == 0
}

/**
GoLang Learning

To access if a key exists in a map use
value , ok := set[key]

if you check directly like this

value = set[key]

if it doesn't exist
	if your map key value is int like this map[rune]int
		the set will return 0
	if you map key value is string like this map[rune]string
		the set will return ""

which can be a valid value for your case
So its better to use
value, ok := set[key]

*/
