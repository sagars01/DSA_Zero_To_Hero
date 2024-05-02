/**
 * @link https://leetcode.com/problems/trapping-rain-water/
 * @author sagars01
 *
 *
 */

const trap = (height) => {
  // Use a monotonic Stack to keep track of previous index if its smaller than the current index.

  let mStack = [];
  let sum = 0;
  let idx = 0;

  const stackTop = () => mStack[mStack.length - 1];

  while (idx < height.length) {
    // Check conditions if stack is not emmpty and the top of stack is less than current
    while (mStack.length > 0 && height[current] > height[stackTop()]) {
      const top = stackTop(); // Storing this val for computation
      mStack.pop();

      // This was the first element
      if (!mStack.length) break;

      const distance = current - stackTop() - 1;
      const h = Math.min(height[current], height[stackTop()]) - height[top];

      sum += distance * h;
    }

    mStack.push(idx++);
  }

  return sum;
};
