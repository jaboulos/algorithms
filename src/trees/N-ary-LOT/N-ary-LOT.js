/*
Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).



Example 1:



Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]
Example 2:



Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]


Constraints:

The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 104]
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 * @param {Node} root
 * @return {number[][]}
 */

// not a binary tree, so no left and right
const levelOrder = (root) => {
  let queue = [root]; //"Our queue starts out with the root init.. First in First Out"
  let levelItem = []; //"Used for gathering up the nodes values until the queue is empty"
  let nodeChildren = []; //"Used for gathering up the children of the nodes in the queue until its empty"
  let result = []; //"The array we eventually return"

  while (queue.length) {
    //"While the queue's length is more than zero"
    let node = queue.shift(); //"How we break out of the loop and our current node"
    levelItem.push(node.val); //"Gather up the value of the current node"

    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      nodeChildren.push(child); //"Gather up the nodeChildren of the current node"
    }

    if (queue.length === 0) {
      //"Once the queue is empty our levelItem is complete and we push it in"
      result.push(levelItem);
      levelItem = [];

      if (nodeChildren.length > 0) {
        //"Once the queue is empty we push in the collected nodeChildren if there are any"
        queue.push(...nodeChildren); //"We use the spread operator so we only push in the nodes in the array"
        nodeChildren = [];
      }
    }
  }

  return result;
};
