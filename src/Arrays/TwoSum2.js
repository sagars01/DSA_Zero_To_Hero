function twoSum2(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    if (numbers[start] + numbers[end] === target) return [start + 1, end + 1];
    if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }
  return [];
}

module.exports = twoSum2;
