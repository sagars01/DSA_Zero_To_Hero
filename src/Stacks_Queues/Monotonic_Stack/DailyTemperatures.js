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
var dailyTemperatures = function (t) {
  const monotonicStack = [];
  let output = new Array(t.length).fill(0);

  const topOfStack = () => monotonicStack[monotonicStack.length - 1];
  const stackLen = () => monotonicStack.length;
  for (let index = 0; index < t.length; index++) {
    const currentTemp = t[index];
    if (stackLen() == 0) {
      monotonicStack.push([index, currentTemp]);
      continue;
    }

    while (stackLen() && currentTemp > topOfStack()[1]) {
      const [idx, temp] = monotonicStack.pop();
      output[idx] = index - idx;
    }

    monotonicStack.push([index, currentTemp]);
  }

  return output;
};

/**
 * 
 * Runtime: 279 ms, faster than 85.75% of JavaScript online submissions for Daily Temperatures.
Memory Usage: 71.3 MB, less than 26.51% of JavaScript online submissions for  Daily Temperatures.
 * 
 * 
 */
