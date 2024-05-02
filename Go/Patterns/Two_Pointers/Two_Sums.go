package twopointers

func twoSum(nums []int, target int) []int {
	targetMap := map[int]int{}

	for i := 0; i < len(nums); i++ {
		current := nums[i]
		diff := target - current

		if _, exists := targetMap[diff]; exists {
			return []int{i, targetMap[diff]}
		} else {
			targetMap[current] = i
		}
	}
	return nil
}
