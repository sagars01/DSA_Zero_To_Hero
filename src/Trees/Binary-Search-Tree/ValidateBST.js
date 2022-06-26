/**
 * @link https://leetcode.com/problems/validate-binary-search-tree/
 * @author sagars01
 * @description The main idea is to compare that your left side should be smaller than your right side.
 *
 *
 */

function isValidBST(root, min = null, max = null) {
  if (root === null) return true;

  let current = root.val;

  if (min && current <= min.val) return false;
  if (max && current >= max.val) return false;

  const left = isValidBST(root.left, min, root);
  const right = isValidBST(root.right, root, max);

  return left && right;
}
