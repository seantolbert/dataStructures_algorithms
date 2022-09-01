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
    // accepts a value
    // create a new node
    let newNode = new Node(val);
    // if theres no root
    if (!this.root) {
      // the root becomes the new node
      this.root = newNode;
      return this;
    } else {
      // variable to help move through tree
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.val) {
          if (current.left === null) {
            // assigns node to left of current
            current.left = newNode;
            return this;
          } else {
            // moves to node to left of current
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
