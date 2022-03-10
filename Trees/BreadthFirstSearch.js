const { tree } = require('../TestData/tree');

const breadthFirstSearch = (root) => {
  let queue = [root];
  let denormalized = [];

  while (queue.length > 0) {
    const current = queue.shift();
    denormalized.push(current.value);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return denormalized;
};

console.log(breadthFirstSearch(tree));
