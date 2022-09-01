// get() retrieves a node by its position in the linked list

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
  get(index) {
    // should accept an index
    // if the index is less than zero or equal to the the length of the list return null
    if (index < 0 || index >= this.length) return null; // or undefined
    // loop through the list until you reach the index
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    // return the node at the specified index
    return current;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!");
