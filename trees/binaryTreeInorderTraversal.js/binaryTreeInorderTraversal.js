/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

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
Output: [1,2]

Constraints:
The number of nodes in the tree is in the range [0, 100].
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
const inorderTraversal = (root) => {
  const result = [];
  if (!root) return result;
  helper(root, result);
  return result;
};

const helper = (node, result) => {
  // There is no 'base case', calls will stop after if conditions are satisfied then it returns result
  if (node.left) helper(node.left, result);

  result.push(node.val);

  if (node.right) helper(node.right, result);

  return result;
};

/*
// ITERATIVE solution
const inorderTraversal = (root) => {
  const result = [];
  let stack = [];
  let node = root;
  if (!root) return result;

  while (node || stack.length) {
    // as long as there is a node, push left, keep going left
    while (node) {
      stack.push(node);
      node = node.left;
    }
    // after left is done, pop the last item in the node and go right
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }
  return result;
};
*/
