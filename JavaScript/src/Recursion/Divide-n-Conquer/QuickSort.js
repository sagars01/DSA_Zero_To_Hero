/**
 * Implement the quick sort algorithm
 *
 */

const partition = (arr, start, end) => {
  let pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping the values
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
};

/**
 * @param {Array[Number]} input
 *
 */
const quickSort = (input, low, high) => {
  // Base case
  if (!low) low = 0;
  if (!high) high = input.length - 1;
  if (low >= high) return;

  let index = partition(input, low, high);

  quickSort(input, low, index - 1);
  quickSort(input, index + 1, high);
};

module.exports = quickSort;
