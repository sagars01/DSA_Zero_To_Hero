/*
*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear
in both lower and upper cases, more than once.

Example 1:

Input: s= "hello"
Output: "holle"
*/
package warmup

func (s *Solution) reverseVowels(str string) string {
	slice := []rune(str) // Converts the string to array
	vowelSet := map[rune]bool{
		'a': true,
		'e': true,
		'i': true,
		'o': true,
		'u': true,
		'A': true,
		'E': true,
		'I': true,
		'O': true,
		'U': true}
	start := 0
	end := len(slice) - 1

	for start < end {
		for start < end && !vowelSet[slice[start]] {
			start++
		}

		for start < end && !vowelSet[slice[end]] {
			end--
		}

		if start < end {
			slice[start], slice[end] = slice[end], slice[start]
			start++
			end--
		}
	}
	return string(slice)
}
