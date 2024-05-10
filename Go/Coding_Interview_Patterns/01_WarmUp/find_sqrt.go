/**

Problem Statement
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.8284, and since we need to return the floor of the square root (integer), hence we returned 2.  

*/

package warmup

import ()
type Solution struct{}

// mySqrt finds the square root of a given number using binary search.
func (s Solution) mySqrt(x int) int {
    // TODO: Write your code here
    if x < 2 {
        return x
    }
    low , high := 2 , x / 2

    for low < high {
        mid := low + ( high - low ) / 2

        sqr := int32(mid) * int32(mid)
        if sqr == x {
            return mid
        }
        if sqr < x {
            low = mid + 1
        } else {
            high = mid - 1
        }

    }

    return high
}

/**
GoLang Learning

1. int(x) converts a float to nearest number

2. high-low / 2 gives a lower bound mid while low + ( high - low ) /2 gives a upper bound
or nearest integer which is necessary for binary search

Example 

(high-low) / 2

high = 15
low = 2

mid = 15 - 2 / 2 = 6.5

int(mid) = 6 // chops off the 0.5 

while 

low + (high - low ) / 2

2 + (15 - 2) /2 
2 + 13/2
2 + 6

8 // This is correct. 

The mid between 2-15 is 8



*/