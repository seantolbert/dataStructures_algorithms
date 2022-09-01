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
  traverse() {
    // moves through the entire linked list
    // can be accessed by the list.traverse() command within console
    // important to display changes throughout the lesson
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}
