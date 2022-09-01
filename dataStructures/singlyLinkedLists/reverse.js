// reverse() reverses the list

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
  reverse() {
    // swap the head and the tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    // prev HAS to be null
    let prev = null;
    // loop through
    for (let i = 0; i < this.length; i++) {
      // set next to be the next property on whatever node is
      next = node.next;
      // set the next property on that node to be whatever prev is
      node.next = prev;
      // set prev to be the value of the node variable
      prev = node;
      // set the node variable to be the value of the next variable
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!");
