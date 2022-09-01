// piece of data  - val
//  reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    // this function should accept a value
    // create a new node using the value passed to a function
    let newNode = new Node(val);
    // if there is no head property, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    // otherwise set the next property on the tail to be the new node and
    // set the tail property to be the newly vreated node
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment the length by 1
    this.length++;
    // return linked list
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
