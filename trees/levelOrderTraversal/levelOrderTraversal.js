/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

// when using bfs, going to use queues FIFO
const levelOrder = (root) => {
  // always make result
  const result = [];

  // always do this check
  if (!root) return result;

  // always create a queue
  let q = [];
  // add root to queue
  q.push(root);

  while (q.length) {
    // create variable to determine current level of the tree
    const level = q.length;
    // create variable that contains the items at that current level of BT
    const levelItems = []; // array of nodes

    // loop over each level
    for (let i = 0; i < level; i++) {
      // first thing to do is create new variable and remove first item from q
      let currNode = q.shift();
      // push current nodes value into levelItems
      levelItems.push(currNode.val);

      // check if current node has a left child or right child, if it does, add to the queue
      if (currNode.left) q.push(currNode.left);
      if (currNode.right) q.push(currNode.right);
    }
    result.push(levelItems);
  }
  return result;
};
