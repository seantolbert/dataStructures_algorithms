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
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // if there are no nodes in the list return undefined
    if (!this.head) return undefined;
    // loop through the list until you reach the tail w/traverse method
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // console.log(current.val)
    // console.log(newTail.val)
    // set the tail to be the 2nd to last node
    this.tail = newTail;
    // set next property of the second to last node to be null
    this.tail.next = null;
    // decrement the length of the list by 1
    this.length--;
    // if the length of the list is 1 there will be an error
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the value of the node removed
    return current;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!");
