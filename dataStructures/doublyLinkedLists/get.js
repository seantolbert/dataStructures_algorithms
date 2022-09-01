// get returns the value of a node based on its index

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    // accepts an index argument
    // if index is less than 0 or greater/equal to the list length return null
    if (index < 0 || index >= this.length) return null;
    // establish helper variables for looping
    let counter, current;
    // if the index is less than or equal to half the length of the list
    if (index <= this.length / 2) {
      // loop through the list starting from head and loop towards the middle
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      // if the index is greater than or equal to half the length of the list
    } else {
      // loop through the list starting from tail and loop towards the middle
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    // return node value once its found
    return current;
  }
}

let list = new DoublyLinkedList();
list.push("Hey");
list.push("there");
list.push("my");
list.push("double");
list.push("dude");
