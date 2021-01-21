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

const bfs = (root) => {
  const result = [];
  if (!root) return result;

  let q = [];
  q.push(root);

  while (q.length > 0) {
    const nodeItems = [];
    const level = q.length;

    for (let i = 0; i < level; i++) {
      let currentNode = q.shift();
      nodeItems.push(currentNode.val);
      if (currentNode.left) q.push(currentNode.left);
      if (currentNode.right) q.push(currentNode.right);
    }

    result.push(nodeItems);
  }

  return result;
};
