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
  // declare result
  const result = [];

  // check if input is null
  if (!root) return result;

  // create a queue
  let q = [];
  q.push(root);

  while (q.length > 0) {
    // create variable that holds items at that current level of the BT
    const nodeItems = [];

    // create variable to determine current level
    const level = q.length;

    // iterate over each level
    for (let i = 0; i < level; i++) {
      // each iteration, remove first item from queue (FIFO)
      let currentNode = q.shift();

      // push VALUES from the current node into nodeItems
      nodeItems.push(currentNode.val);

      // check if current node has a left or right child, if it does, add it to the queue
      if (currentNode.left) q.push(currentNode.left);
      if (currentNode.right) q.push(currentNode.right);
    }
    // add the nodeItems to result
    result.push(nodeItems);
  }

  return result;
};
