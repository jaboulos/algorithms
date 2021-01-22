/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Example 4:
Input: root = [1,2]
Output: [1,2]

Example 5:
Input: root = [1,null,2]
Output: [1,2]

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Follow up: Recursive solution is trivial, could you do it iteratively?
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

// preorder is NLR
const preorderTraversal = (root) => {
  if (!root) return [];
  const result = [];
  helper(root, result);
  return result;
};

const helper = (node, result) => {
  result.push(node.val); // pushing here is PREORDER // NLR

  if (node.left) {
    helper(node.left, result);
  }

  // result.push(node.val); // pushing here is INORDER // LNR

  if (node.right) {
    helper(node.right, result);
  }

  // result.push(node.val); // pushing here is POSTORDEER // LRN

  return result;
};

/*
// ITERATIVE SOLUTION
const preorderTraversal = (root) => {
  // need to use a stack approach FILO
  if (!root) return [];
  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    let currentNode = stack.pop();
    result.push(currentNode.val); // push here if preorder

    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }
  return result;
};
*/
