/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
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
 * @return {number[][]}
 */

const zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [];
  q.push(root);
  const results = [];
  let isReversed = true;
  console.log("Q before while", q);
  while (q.length) {
    console.log("Q inside while", q);
    const numNodes = q.length;
    let temp = [];

    for (let i = 0; i < numNodes; i++) {
      let node = q.shift();

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      temp.push(node.val);
    }

    isReversed = !isReversed;
    temp = isReversed ? temp.reverse() : temp;
    results.push(temp);
  }
  return results;
};
