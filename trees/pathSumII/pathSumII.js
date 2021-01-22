/*
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: []

Example 3:
Input: root = [1,2], targetSum = 0
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
*/

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
 * @return {number[][]}
 */

const pathSum = (root, targetSum) => {
  let result = [];
  if (!root) return result;
  dfs(root, [], targetSum, result);
  return result;
};

const dfs = (node, path, target, result) => {
  target -= node.val;
  path.push(node.val);

  if (!node.left && !node.right && target === 0) {
    result.push(path.slice());
  }

  if (node.left) {
    dfs(node.left, path, target, result);
  }

  if (node.right) {
    dfs(node.right, path, target, result);
  }
  path.pop();
  // return result;
};
