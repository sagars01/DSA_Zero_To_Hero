/**
 * This is an example problem of Monotonic Stack
 *
 * @link https://leetcode.com/problems/daily-temperatures/
 * @author sagars01
 * @link Theory: https://github.com/sagars01/DSA_Zero_To_Hero/tree/master/src/Stacks_Queues#monotonic-stacks
 * @description The idea is have a decreasing monotonic stack.
 *
 * Take a stack push [index , temperature]
 * Next iteration
 *  -  check if current temp greater than temperature on top of stack
 *      - if yes update the diff in index (currentIndex - stack[top[1]]) in     another array of output
 *  - push current temp in the stack
 *
 * @example Input : [73,74,75,71,69,72,76,73]
 *  Output: [1,1,4,2,1,1,0,0]
 */
/**
 * @param {number[]} t
 * @return {number[]}
 */
var dailyTemperatures = function (t) {
  let monotonicStack = [];
  let result = new Array(t.length).fill(0);
  let current = 0;
  const topOfStack = () => monotonicStack[monotonicStack.length - 1];
  while (current < t.length) {
    let currentTemp = t[current];
    while (topOfStack && currentTemp > t[topOfStack()]) {
      const previousTemp = monotonicStack.pop();
      const dayDiff = current - previousTemp;
      result[previousTemp] = dayDiff;
    }

    monotonicStack.push(current);
    current++;
  }

  return result;
};

/**
 * 
 * Runtime: 279 ms, faster than 85.75% of JavaScript online submissions for Daily Temperatures.
Memory Usage: 71.3 MB, less than 26.51% of JavaScript online submissions for  Daily Temperatures.
 * 
 * 
 */
