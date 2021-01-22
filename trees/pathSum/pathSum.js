/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// have to go bottom-up
const hasPathSum = (root, targetSum) => {
  if (!root) return false;
  return helper(root, targetSum);
};

const helper = (node, sum) => {
  sum -= node.val;

  let left = false;
  let right = false;

  if (!node.left && !node.right) {
    return sum === 0; // returns true or false
  }

  if (node.left) {
    left = helper(node.left, sum);
  }

  if (node.right) {
    right = helper(node.right, sum);
  }

  // returns true if either are true
  return left || right;
};
