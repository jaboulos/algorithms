/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [3,2,1]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Example 4:
Input: root = [1,2]
Output: [2,1]

Example 5:
Input: root = [1,null,2]
Output: [2,1]

Constraints:
The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Follow up:
Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */

// RECURSIVE solution
const postorderTraversal = (root) => {
  const result = [];
  if (!root) return result;
  return helper(root, result);
};

const helper = (node, result) => {
  if (node.left) helper(node.left, result);
  if (node.right) helper(node.right, result);
  result.push(node.val);
  return result;
};

// ITERATIVE solution
/*
const postorderTraversal = (root) => {
  const result = [];
  let stack = [root];
  if (!root) return result;

  while (stack.length) {
    let pop = stack.pop();

    result.push(pop.val);

    if (pop.left) stack.push(pop.left);
    if (pop.right) stack.push(pop.right);
  }
  return result.reverse();
};
*/
