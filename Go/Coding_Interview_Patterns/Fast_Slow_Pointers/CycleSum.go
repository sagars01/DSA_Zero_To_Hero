package fastslowpointers

// Easy Solution
func FindCycle(num int) bool {

	set := make(map[int]bool)

	for num != 1 && !set[num] {
		set[num] = true

		sum := 0

		for num > 0 {
			digit := num % 10
			sum += digit * digit
			num /= 10
		}
		num = sum

	}

	return num == 1
}

// Better Solution

func FindCycleBetter(num int) bool {
	slow, fast := num, num
	for {
		slow = SumOfSquares(num)
		fast = SumOfSquares(SumOfSquares(num))

		if slow == fast {
			break
		}
	}

	return slow == 1
}

func SumOfSquares(num int) int {
	sum := 0

	for num > 0 {
		digit := num % 10
		sum = digit * digit
		num = num / 10
	}

	return sum

}
