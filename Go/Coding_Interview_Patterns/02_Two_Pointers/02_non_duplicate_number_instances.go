/**

Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. 
The non-duplicate numbers should be sorted and you should not use any extra space 
so that the solution has constant space complexity i.e., .

Move all the unique number instances at the beginning of the array and after moving 
return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after moving element will be [2, 3, 6, 9].
*/




import ()

type Solution struct {
}

func (sol *Solution) moveElements(arr []int) int {
    previousNonDuplicate := arr[0]

    counter:= 1

    for i:= 1 ; i < len(arr); i++{
        if arr[i] != previousNonDuplicate {
            previousNonDuplicate = arr[i]
            counter++
        }
    }

    return counter;
}

/**
TC : o(n)
SC: o(1)

Algo:

- Start counter from array index 1
	why? 
	The first element is definitely a unique one.
- Store the nonduplicate number
- Move through the array 
	Check if the current number is not equal to the previousNonDuplicate Number
	if its not then it would be put to the first place 
	Since we don't need to return the array
	We just return the counter which will assume the replacement would happen.

*/