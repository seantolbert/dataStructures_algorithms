class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // accepts the new value
    // create a new node
    let newNode = new Node(val);
    // if the head property is null,
    if (this.length === 0) {
      // set the head property and tail to be the newly created node
      this.head = newNode;
      this.tail = newNode;
      // else
    } else {
      // set the next property on the original tail to be that new node
      this.tail.next = newNode;
      // set previous property of new node to be the old tail
      newNode.prev = this.tail;
      // set the tail to be the new node
      this.tail = newNode;
    }
    // increment the length
    this.length++;
    // return the doubly linkedlist
    return this;
  }
}

let list = new DoublyLinkedList();
list.push("Hey");
list.push("there");
list.push("my");
list.push("double");
list.push("dude");
