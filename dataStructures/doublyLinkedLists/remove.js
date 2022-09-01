// remove takes an index and removes selected node at that index

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
    if (!this.head) return undefinied;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter, current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  remove(index) {
    // if index is less than 0 or greater/equal to list length return undefined/null
    if (index < 0 || index >= this.length) return undefined;
    // if the index is 0, shift
    if (index === 0) return !!this.shift();
    // if index is the end of the list, pop
    if (index === this.length - 1) return !!this.pop();
    // use get to retrieve item to be removed
    let selectedNode = this.get(index);
    // update the next and prev properties to remove the found node from the list
    let afterNode = selectedNode.next;
    let beforeNode = selectedNode.prev;
    afterNode.prev = beforeNode;
    beforeNode.next = afterNode;
    // set next and prev to null on the found node
    selectedNode.next = null;
    selectedNode.PREV = null;
    // decrement list length
    this.length--;
    return selectedNode;
  }
}

let list = new DoublyLinkedList();
list.push("Hey");
list.push("there");
list.push("my");
list.push("double");
list.push("dude");
