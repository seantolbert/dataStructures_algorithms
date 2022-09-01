// shift metyhod removes a new node from the beginning of a list
// removing a node from the end of the linked list

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
    // if there are no nodes, return undefined
    if (!this.head) return undefined;
    // store current head property in variable
    let currentHead = this.head;
    // set the head property to be the current head's next property
    this.head = currentHead.next;
    // decrement the length by 1
    this.length--;
    // protect method from undefined by making tail null when you shift with just one item
    if (this.length === 0) {
      this.tail = null;
    }
    // return the value of the node removed
    return currentHead;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!");
