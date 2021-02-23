/*
Binary Trees:
Trees whos nodes can have at most, 2 children

BST:
- Can have at most, 2 children per node
  - Every node left of a parent node is always less than the parent
  - Every node right of a parent node is always greater than the parent
- Sorted in a particular order (inorder, preorder, postorder)

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// starts with empty root
class BST {
  constructor() {
    this.root = null;
  }

  // insert node method
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        current.right = newNode;
        return this;
      }
      current = current.right;
    }
  }
  // find value method
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current || false;
  }
}

// insert is O(logn)
// search is O(logn)
