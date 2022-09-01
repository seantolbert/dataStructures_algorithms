class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    found = false;
    // current will break us out of the loop once it turns null
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(11);
tree.insert(12);
tree.insert(13);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(2);

// Big O 
// insertion - O(log(n))
// searching - O(log(n))