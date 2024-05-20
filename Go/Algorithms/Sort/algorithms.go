package Algorithms_Sort

import (
	"fmt"
)

type Solution struct{}
type SortFunc func(arr []int) []int

func CallFunctions(sortFunc SortFunc, arr []int, startLine string, endLine string) {
	fmt.Println(startLine)
	sortedArr := sortFunc(arr)
	fmt.Println(sortedArr)
	fmt.Println(endLine)
}

func Algorithms_Sort() {
	arr := []int{64, 34, 25, 12, 22, 11, 90}
	sol := new(Solution)
	CallFunctions(sol.BubbleSort, arr, "Starting Bubble Sort", "=== End Bubble Sort===")
}
