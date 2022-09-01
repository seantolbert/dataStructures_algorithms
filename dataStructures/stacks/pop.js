// classes for building stacks

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    // if there are no nodes, return null
    if (!this.first) return null;
    // create a temporary variable to store the first property on stack
    let temp = this.first;
    // if there is only one node, set the last property to null;
    if (this.first === this.last) {
      this.last = null;
    }
    // if there is more than one node
    // set the proprty to be the next of the next
    // property of the currrent first
    this.first = this.first.next;
    // decrement the length
    this.size--;
    // return the value of the popped node
    return temp.val;
  }
}

let stack = new Stack();
stack.push("how");
stack.push("we");
stack.push("stackin");
stack.push("foos");
