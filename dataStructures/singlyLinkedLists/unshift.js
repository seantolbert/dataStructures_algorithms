// unshift() adds a new node to the beginning of a the list

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
  unshift(val) {
    // should accept a value
    // creates a new node using the value passed to the function
    let newNode = new Node(val);
    // if there is no head property on the list,
    if (!this.head) {
      // set the head and tail to be the newly created node
      this.head = newNode;
      this.tail = this.head;
    }
    // otherwise,
    else {
      // set the newly created node's next property to be the current head property on the list
      newNode.next = this.head;
    }
    // set the head property on the list to be the newly created node
    this.head = newNode;
    // increment the length of the list by 1
    this.length++;
    // return the linked list
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!");
