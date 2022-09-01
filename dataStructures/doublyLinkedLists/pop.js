// removes the last item of the list

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
  pop() {
    // if there is no head or tail return undefined/null
    if (!this.head) return undefinied;
    // store the current tail in a variable to be returned later
    let oldTail = this.tail;
    // if the length is 1,
    if (this.length === 1) {
      // set the head and tail to be null
      this.head = null;
      this.tail = null;
    } else {
      // update the tail to be the previous node
      this.tail = oldTail.prev;
      // set the new tails's next to null
      this.tail.next = null;
    }
    // decrement the length
    this.length--;
    // return removed value
    return oldTail;
  }
}

let list = new DoublyLinkedList();
list.push("Hey");
list.push("there");
list.push("my");
list.push("double");
list.push("dude");
