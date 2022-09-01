// remove() removes a node from the linked list at a specified position

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null; // or undefined
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  remove(index) {
    // accepts just an index
    // if the index is less than 0 or greater than or equal to the length return undefined/null
    if (index < 0 || index >= this.length) return null;
    // if the index is the same as the length - 1, pop
    if (index === this.length - 1) return this.pop();
    // if the index equals 0, shift
    if (index === 0) return this.shift();
    // otherwise
    // use the get method to access the node at index - 1
    let accessedNode = this.get(index - 1);
    // set the next property on the accessed node to be the next of the next node
    let removedNode = accessedNode.next;
    accessedNode.next = removedNode.next;
    // decrement in length
    this.length--;
    // return the value of the node removed
    return removedNode.val;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!");
