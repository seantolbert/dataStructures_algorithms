// removes a node from the beginning of the list

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
  shift() {
    // if the length is 0 or there is no head return undefined
    if (!this.head) return undefined;
    // store current head property in a variable
    let oldHead = this.head;
    // if length is 1
    if (this.length === 1) {
      // set head to be null
      this.head = null;
      // set tail to be null
      this.tail = null;
      // otherwise
    } else {
      // update the head to be the old head's next
      this.head = oldHead.next;
      // set new head's prev property to be null
      this.head.prev = null;
      // set old head's next to null
      oldHead.next = null;
    }
    // decrement length
    this.length--;
    // return removed node val
    return oldHead;
  }
}

let list = new DoublyLinkedList();
list.push("Hey");
list.push("there");
list.push("my");
list.push("double");
list.push("dude");
