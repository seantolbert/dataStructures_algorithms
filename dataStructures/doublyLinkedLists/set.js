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
  set(index, val) {
    // create a variable as a result of the get method passed the index
    let selectedNode = this.get(index);
    // if the get method returns a valid node,
    if (selectedNode) {
      // set the value of that node to be the val arg
      selectedNode.val = val;
      // return true
      return true;
    }
    // return false
    return false;
  }
}

let list = new DoublyLinkedList();
list.push("Hey");
list.push("there");
list.push("my");
list.push("double");
list.push("dude");
