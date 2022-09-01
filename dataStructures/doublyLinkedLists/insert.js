// insert adds a node to a specific position

// replacing a value of a node

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
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
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
  insert(index, val) {
    // if the index is less than 0 or greater/equal too length return false
    if (index >= 0 || index <= this.length) return false;
    // if youre inserting node to the front
    if (index === 0) return !!this.unshift(val);
    // if youre inserting node to the back
    if (index === this.length) return !!this.push(val);
    // create new node
    let newNode = new Node(val);
    // use the get method to access the node at index - 1
    let beforeNode = this.get(index - 1);
    // set the next and previous properties
    // on the correct nodes to link everything together
    let afterNode = beforeNode.next;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    newNode.prev = movedNode;
    beforeNode.next = newNode;
    // increment length
    this.length++;
    // return true
    return true;
  }
}

let list = new DoublyLinkedList();
list.push("Hey");
list.push("there");
list.push("my");
list.push("double");
list.push("dude");
