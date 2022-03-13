var levelOrder = function (root) {
  let queue = [root];
  let levels = [];

  while (queue.length > 0) {
    let queueLength = queue.length;
    let level = [];

    for (let i = 0; i < queueLength; i++) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      level.push(current.val);
    }

    levels.push(level);
  }

  return levels;
};

module.exports = levelOrder;
