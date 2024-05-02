/**
 * @link https://leetcode.com/problems/count-univalue-subtrees/
 * @author sagars01
 * @description If the following two conditions are met, then we have a univalue tree and we should increase a counter
 *  - If the nodes are null then its a univalue tree (base case)
 *  - If the left and right subtree has the same value as the root
 *
 * @note - Revisit
 *
 */

function univalue(root) {
  let count = 0;

  const dfs = (node) => {
    // The base case
    if (!node.left || !node.right) {
      count++;
      return true;
    }

    // The second case
    let isUnival = true;

    if (node.left) {
      isUnival = dfs(node.left) && isUnival && node.left.val === node.val;
    }

    if (node.right) {
      isUnival = dfs(node.right) && isUnival && node.right.val === node.val;
    }

    if (!isUnival) return false;

    count++;
    return true;
  };

  dfs(root);

  return count;
}
